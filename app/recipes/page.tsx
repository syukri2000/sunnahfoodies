import EmptyState from "@/app/components/EmptyState";


import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import RecipesClient from "./recipesClient";



const RecipesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState
      title="Unauthorized"
      subtitle="Please login"
    />
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
     
        <EmptyState
          title="No recipes found"
          subtitle="Looks like you have no recipes."
        />
     
    );
  }

  return (
    
      <RecipesClient
        listings={listings}
        currentUser={currentUser}
      />
   
  );
}
 
export default RecipesPage;