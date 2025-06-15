import {NextRequest, NextResponse} from 'next/server';
import {trade} from '@/prisma/generated/client';
import {addTrade, getTrades} from "@/lib/data/trade";

export async function GET() {
  const data = await getTrades();
  return NextResponse.json(data);
}

// export async function POST(req: NextRequest) {
//   const body: Partial<trade> = await req.json();
//
//   if (!body.bar) {
//     return new Response(JSON.stringify({error: "Missing @Nonnull 'bar'"}), {
//       status: 400,
//     });
//   }
//
//   const newTrade = await addTrade({bar: body.bar, baz: body.baz ?? null});
//
//   return Response.json(newTrade);
// }
