import {prisma} from '@/lib/db/prisma';
import {trade} from '@/prisma/generated/client';

export async function addTrade(data: { bar: string; baz: number | null }) {
  try {
    return await prisma.foo.create({data});
  } catch (err: any) {
    console.error('💥 Prisma create error:', err.message, err);
    throw err;
  }
}

export async function getTrades(): Promise<trade[]> {
  return prisma.trade.findMany({
    orderBy: {datetime: 'asc'},
  });
}

// export async function updateTrade(id: string, bar: string, baz: number | null): Promise<trade | null> {
//   const parsedId = parseInt(id, 10);
//
//   if (isNaN(parsedId)) {
//     throw new Error(`Invalid ID: ${id} is not a number`);
//   }
//
//   return await prisma.trade.update({
//     where: {id: parsedId},
//     data: {bar, baz},
//   });
// }

export async function deleteTrade(id: number): Promise<trade> {
  return await prisma.trade.delete({
    where: {id},
  });
}
