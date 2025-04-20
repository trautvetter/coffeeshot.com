import {NextRequest, NextResponse} from 'next/server';
import {foo} from '../../../prisma/generated/client';
import {addFoo, getFoo} from "@/lib/data/foo";

export async function GET() {
  const data = await getFoo();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body: Partial<foo> = await req.json();

  if (!body.bar) {
    return new Response(JSON.stringify({error: "Missing @Nonnull 'bar'"}), {
      status: 400,
    });
  }

  const newFoo = await addFoo({bar: body.bar, baz: body.baz ?? null});

  return Response.json(newFoo);
}
