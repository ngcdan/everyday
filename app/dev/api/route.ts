import { NextResponse } from 'next/server';
import mapbox from '@mapbox/mapbox-sdk/services/geocoding';
import { promises as fs } from 'fs';

const mapboxClient = mapbox({ accessToken: process.env.MAPBOX_ACCESS_TOKEN || '' });

export function GET(_req: Request) {
  console.log('call api/dev/route');
  console.log(_req);

  const data = { message: 'Hello from Next.js API with TypeScript!, GET' };
  return NextResponse.json(data, { status: 200 })
}

export async function POST(_req: Request) {
  console.log('call api/dev/route');
  console.log(_req);
  try {
    // 1. Read data ports from `ports.json`
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/ports.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch ports.json');
    }
    const ports = await response.json();
    const transformedPorts = transformPortData(ports);

    // 3. Extract pickUpAddress, deliveryAddress, transportationMethod from request body
    const { pickUpAddress, deliveryAddress } = await _req.json();
    if (!pickUpAddress || !deliveryAddress) {
      throw new Error('Missing pickUpAddress or deliveryAddress in the request body');
    }

    // 4. Use Mapbox Geocoding API to get coordinates
    const pickUpResponse = await mapboxClient
      .forwardGeocode({ query: pickUpAddress, limit: 1 })
      .send();
    const deliveryResponse = await mapboxClient
      .forwardGeocode({ query: deliveryAddress, limit: 1 })
      .send();

    if (!pickUpResponse.body.features.length) {
      throw new Error(`Geocoding failed for pickUpAddress: ${pickUpAddress}`);
    }
    if (!deliveryResponse.body.features.length) {
      throw new Error(`Geocoding failed for deliveryAddress: ${deliveryAddress}`);
    }

    const pickUpCoords: number[] = pickUpResponse.body.features[0].center;
    const deliveryCoords: number[] = deliveryResponse.body.features[0].center;

    console.log(transformedPorts);

    // 6. Find the nearest ports
    const nearestPickUpPort = findNearestPort(pickUpCoords, transformedPorts);
    const nearestDeliveryPort = findNearestPort(deliveryCoords, transformedPorts);
    if (!nearestPickUpPort || !nearestDeliveryPort) {
      throw new Error('Failed to find the nearest port for the provided addresses');
    }

    // 7. Return nearest route
    const data = {
      fromLocation: nearestPickUpPort,
      toLocation: nearestDeliveryPort,
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error(error);
    console.error('Error in POST /api/dev/route:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Haversine formula to calculate distance between two coordinates
function haversineDistance(coords1: number[], coords2: number[]): number {
  const toRadians = (degree: number) => degree * (Math.PI / 180);
  const R = 6371; // Earth's radius in kilometers

  const dLat = toRadians(coords2[1] - coords1[1]);
  const dLon = toRadians(coords2[0] - coords1[0]);

  const lat1 = toRadians(coords1[1]);
  const lat2 = toRadians(coords2[1]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}

function findNearestPort(coords: number[], ports: any[]): any {
  let nearestPort = null;
  let minDistance = Infinity;

  for (const port of ports) {
    if (!port || !port.coordinates) continue;
    const distance = haversineDistance(coords, port.coordinates);
    if (distance < minDistance) {
      minDistance = distance;
      nearestPort = port;
    }
  }

  if (!nearestPort) {
    return null;
  }

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${nearestPort.coordinates[1]},${nearestPort.coordinates[0]}`
  const estTimeHours = minDistance / 50;
  return {
    ...nearestPort,
    distance: minDistance.toFixed(2),
    estTimeHours,
    googleMapsLink
  };
}

function transformPortData(data: any[]) {
  const result = [];

  for (const [key, value] of Object.entries(data)) {
    if (!value || !key) continue;
    const coordinates = value.coordinates || '';
    if (!coordinates) continue;
    const name = value.name;
    const portAddress = `${value.city || ''}, ${value.province || ''}, ${value.country || ''}`;
    const country = value.country || '';
    const unlocs = (value.unlocs && value.unlocs.length > 0) ? value.unlocs[0] : '';

    const newEntry = {
      coordinates: coordinates,
      name: name,
      address: portAddress,
      country: country,
      unlocs: unlocs,
    };

    result.push(newEntry);
  }

  return result;
}