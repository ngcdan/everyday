import { NextResponse } from 'next/server';
import mapbox from '@mapbox/mapbox-sdk/services/geocoding';

const mapboxClient = mapbox({ accessToken: process.env.MAPBOX_ACCESS_TOKEN || '' });

export async function POST(req: Request) {
  console.log('Calling api/dev/route');
  try {
    const ports = await fetchPorts();
    const transformedPorts = transformPortData(ports);

    const { pickUpAddress, deliveryAddress } = await req.json();
    if (!pickUpAddress || !deliveryAddress) {
      throw new Error('Missing pickUpAddress or deliveryAddress in the request body');
    }

    const [pickUpCoords, deliveryCoords] = await Promise.all([
      getCoordinates(pickUpAddress),
      getCoordinates(deliveryAddress)
    ]);

    const nearestPickUpPort = findNearestPort(pickUpCoords, transformedPorts);
    const nearestDeliveryPort = findNearestPort(deliveryCoords, transformedPorts);

    if (!nearestPickUpPort || !nearestDeliveryPort) {
      throw new Error('Failed to find the nearest port for the provided addresses');
    }

    const data = {
      fromLocation: nearestPickUpPort,
      toLocation: nearestDeliveryPort,
    };

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error('Error in POST /api/dev/route:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function fetchPorts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/ports.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch ports.json');
  }
  return response.json();
}

async function getCoordinates(address: string): Promise<number[]> {
  const response = await mapboxClient
    .forwardGeocode({ query: address, limit: 1 })
    .send();

  if (!response.body.features.length) {
    throw new Error(`Geocoding failed for address: ${address}`);
  }

  return response.body.features[0].center;
}

function transformPortData(data: any[]) {
  return Object.entries(data).reduce((result: any[], [key, value]: [string, any]) => {
    if (value && key && value.coordinates) {
      result.push({
        coordinates: value.coordinates,
        name: value.name,
        address: `${value.city || ''}, ${value.province || ''}, ${value.country || ''}`,
        country: value.country || '',
        unlocs: (value.unlocs && value.unlocs.length > 0) ? value.unlocs[0] : '',
      });
    }
    return result;
  }, []);
}

function findNearestPort(coords: number[], ports: any[]): any {
  const [nearestPort, minDistance] = ports.reduce(
    ([nearestPort, minDistance], port) => {
      if (!port || !port.coordinates) return [nearestPort, minDistance];
      const distance = haversineDistance(coords, port.coordinates);
      return distance < minDistance ? [port, distance] : [nearestPort, minDistance];
    },
    [null, Infinity]
  );

  if (!nearestPort) return null;

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${nearestPort.coordinates[1]},${nearestPort.coordinates[0]}`;
  const estTimeHours = minDistance / 50;

  return {
    ...nearestPort,
    distance: minDistance.toFixed(2),
    estTimeHours,
    googleMapsLink
  };
}

function haversineDistance(coords1: number[], coords2: number[]): number {
  const toRadians = (degree: number) => degree * (Math.PI / 180);
  const R = 6371; // Earth's radius in kilometers

  const [lon1, lat1] = coords1.map(toRadians);
  const [lon2, lat2] = coords2.map(toRadians);

  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}