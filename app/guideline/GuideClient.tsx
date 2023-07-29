import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image";

const GuideClient = () => {
    return ( <Container>
        <Heading
            title="Guidelines"
            subtitle="All the things you need to know"
        />
        <div className="
            mt-10
            flex
            flex-cols-1
            sm:flex-cols-2
            md:flex-cols-3
            lg:flex-cols-4
            xl:flex-cols-5
            2xl:flex-cols-6
            gap-8
        ">
           <div>
           <div className="
          text-lg font-bold gap-8 text-neutral-700 ">
            A. How to Register my Account?
           
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap"> 
        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/UserMenu.png"
        />
        1. Click the blue user menu icon and click sign up

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/Register.png"
        />
        2. Fill in the information and click Continue
            </div>
            </div>
            
            <hr />

            <div className="
          text-lg font-bold  text-neutral-700 pt-10">
            B. How to Log In my Account?

            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">         
             <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/UserMenu.png"
        />
         1. Click the blue user menu icon and click Log In

         <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/LogIn.png"
        />
               2. Fill in the information and click Continue
            </div>
            </div>
            <hr />

            <div className="
          text-lg font-bold text-neutral-700 pt-10">
            C. How to Create Recipe?

            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/UserMenu.png"
        />
        1. Click Publish your Creation

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/RecipeCategory.png"
        />
        2. Choose Category of your recipe

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/RecipeImage.png"
        />
        3. Choose Image of your recipe

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/RecipeDescription.png"
        />
        4. Fill in the ingredient of the recipe

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/RecipeDescription.png"
        />
        5. Fill in the ingredient of the recipe

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/RecipeTitle.png"
        />
        6. Fill in the Title and Description of the recipe and click Create
       


            </div>
            </div>
            <hr />

            <div className="
          text-lg font-bold text-neutral-700 pt-10">
            D. How to Create Comment?

            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/Comment.png"
        />
        1. Click Login to Github

        <Image 
        
        alt="Register"
        className="hidde md:block cursor-pointer"
        height= "400"
        width= "400"
        src= "/images/Comment2.png"
        />
        2. Create your comment
            </div>
            </div>
            <hr />

            </div>

           
        </div>
        
    </Container> );
}
 
export default GuideClient;