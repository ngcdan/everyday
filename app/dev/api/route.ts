import { NextResponse } from 'next/server';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json({ message: 'Hello from Next.js API!' });
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export function GET(_req: Request) {
  console.log('call api/dev/route');
  console.log(_req);

  const data = { message: 'Hello from Next.js API with TypeScript!' };
  return NextResponse.json(data, { status: 200 })
}