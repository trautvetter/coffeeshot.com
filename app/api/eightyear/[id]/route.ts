// app/api/eightyear/[id]/route.ts
import {NextRequest} from "next/server";
import {eightyear} from "../../../../prisma/generated/client";
import {updateEightyear} from "@/lib/data/8year";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const {id} = await context.params;

  try {
    const body: eightyear = await req.json();

    const updated = await updateEightyear(id, body.checkedoff ? body.checkedoff : false, body.data);
    if (!updated) {
      return new Response(JSON.stringify({error: "Not found"}), {status: 404});
    }

    return Response.json(updated);
  } catch (err) {
    console.error("PUT /foo/:id", err);
    return new Response(JSON.stringify({error: "Internal error"}), {status: 500});
  }
}
