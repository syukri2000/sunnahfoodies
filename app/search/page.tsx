import { NextApiRequest, NextApiResponse } from "next";
import getCurrentUser from "../actions/getCurrentUser";
import getListings, { IListingsParams } from "../actions/getListings";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import SearchInput from "../components/inputs/SearchInput";
import ListingCard from "../components/listings/ListingCard";
import { prisma } from "../libs/prismadb";

import { safeListing } from "../types";

interface HomeProps{
    searchParams: IListingsParams
  }

const Home = async({searchParams}: HomeProps) =>{
    const listings = await getListings(searchParams);
    return (
      <>
      <Container>
        <SearchInput/>
        <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 mx-auto max-w-7xl px-2">
          <div className="max-w-2xl mx-auto">
            <ul className="mt-8">
              {listings?.map((listings: safeListing) => (
                <div key={listings.title}>
                 <ListingCard 
                 
                 key={listings.id}
                 data={listings}
            />
                </div>
              ))}
            </ul>
          </div>
        </div>
        </Container>
      </>
    )
  }

  export default Home

  export async function getServerSideProps( req: NextApiRequest,
    res: NextApiResponse) {
    
    // will always run on the server
    // newest first
    const { q:query } = req.query;
    const posts = await prisma.listing.findMany({
        where: {
            title: { contains: query as string, mode: 'insensitive' } 
          },

      orderBy: {
        

        createdAt: "desc",
      },
    })
  
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts)),
      },
    }
  }