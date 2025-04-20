import {NextResponse} from "next/server";
import {getEightyear} from "@/lib/data/8year";

export async function GET() {
  const data = await getEightyear();
  return NextResponse.json(data);
}
