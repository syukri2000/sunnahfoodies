
import prisma from "@/app/libs/prismadb";
import { NextApiRequest, NextApiResponse } from "next";

export interface IListingsParams{

    title?: string;
}

export default async function getListingByTitle(
    params: IListingsParams,
   
){
    try {
        const { title } = params;
       

        const listing = await prisma.listing.findMany({
            where: {
                OR: [
                  { title: { contains:  title as string } },
                ],
              },
            orderBy: {
             createdAt: 'desc'
            }
        });

        if (!listing) {
            return null;
          }
      

    const safeListings = listing.map((listing) =>({
        ...listing,
        createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
    } catch (error: any) {
        throw new Error(error);
        
    }
}