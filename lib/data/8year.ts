import {prisma} from "@/lib/db/prisma";
import {eightyear} from '@prisma/client';
import {Prisma} from "@/generated/prisma";

export async function getEightyear(): Promise<eightyear[]> {
  return await prisma.eightyear.findMany({
    orderBy: {id: 'asc'},
  });
}

export async function updateEightyear(id: string, checkedoff: boolean, data: Prisma.JsonValue | null): Promise<eightyear | null> {
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    throw new Error(`Invalid ID: ${id} is not a number`);
  }

  return await prisma.eightyear.update({
    where: {id: parsedId},
    data: {
      checkedoff: checkedoff,
      data: {
        updatedBy: "rob",
        timestamp: new Date().toISOString(),
      },
    },
  });
}
