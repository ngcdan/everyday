// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   if (req.method === 'OPTIONS') {
//     const headers = {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     };

//     return new NextResponse(null, { status: 204, headers });
//   }

//   return NextResponse.next();
// }
