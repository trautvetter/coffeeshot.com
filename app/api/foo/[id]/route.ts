// app/api/foo/[id]/route.ts
import {deleteFoo, updateFoo} from "@/lib/data/foo";
import {NextRequest} from "next/server";
import {foo} from '@/prisma/generated/client';

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params;

  try {
    const body: foo = await req.json();

    if (!body.bar) {
      return new Response(JSON.stringify({error: "Missing @Nonnull bar"}), {status: 400});
    }

    const updated = await updateFoo(id, body.bar, body.baz);
    if (!updated) {
      return new Response(JSON.stringify({error: "Not found"}), {status: 404});
    }

    return Response.json(updated);
  } catch (err) {
    console.error("PUT /foo/:id", err);
    return new Response(JSON.stringify({error: "Internal error"}), {status: 500});
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params;

  const idNumber = Number(id);
  if (isNaN(idNumber)) {
    return new Response(JSON.stringify({error: 'Invalid ID'}), {status: 400});
  }

  console.log(`🗑️ Deleting foo with ID: ${idNumber}`);

  try {
    const deletedFoo = await deleteFoo(idNumber);
    return Response.json({id: deletedFoo.id});
  } catch (err: any) {
    if (err.code === 'P2025') {
      // Record not found
      return new Response(JSON.stringify({error: 'Not found'}), {status: 404});
    }

    console.error('❌ Delete error:', err);
    return new Response(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
  }
}
