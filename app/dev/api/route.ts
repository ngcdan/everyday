import { NextResponse } from 'next/server';

export function GET(_req: Request) {
  console.log('call api/dev/route');
  console.log(_req);

  const data = { message: 'Hello from Next.js API with TypeScript!, GET' };
  return NextResponse.json(data, { status: 200 })
}

export function POST(_req: Request) {
  console.log('call api/dev/route');
  console.log(_req);

  const data = { message: 'Hello from Next.js API with TypeScript!, POST' };
  return NextResponse.json(data, { status: 200 })
}