import {prisma} from '@/lib/db/prisma';
import {foo} from '@/prisma/generated/client';


export async function addFoo(data: { bar: string; baz: number | null }) {
  try {
    return await prisma.foo.create({ data });
  } catch (err: any) {
    console.error('💥 Prisma create error:', err.message, err);
    throw err;
  }
}

export async function getFoo(): Promise<foo[]> {
  return await prisma.foo.findMany({
    orderBy: { id: 'asc' },
  });
}

export async function updateFoo(id: string, bar: string, baz: number | null): Promise<foo | null> {
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    throw new Error(`Invalid ID: ${id} is not a number`);
  }

  return await prisma.foo.update({
    where: { id: parsedId },
    data: { bar, baz },
  });
}

export async function deleteFoo(id: number): Promise<foo> {
  return await prisma.foo.delete({
    where: { id },
  });
}
