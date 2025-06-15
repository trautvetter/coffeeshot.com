import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const auth: string|null = req.headers.get('authorization');

  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
