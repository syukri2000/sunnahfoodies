import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const search = async (searchTerm: string) => {
  const posts = await prisma.listing.findMany({
    where: {
      title: {
        contains: searchTerm
      }
    }
  });

  return ;
};