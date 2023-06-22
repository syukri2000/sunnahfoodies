// Example API route for search
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q:query } = req.query;

  try {
    const listing = await prisma.listing.findMany({
      where: {
        OR: [
          { title: { contains: query as string, mode: 'insensitive' } },
          { description: { contains: query as string, mode: 'insensitive' } },
        ],
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}