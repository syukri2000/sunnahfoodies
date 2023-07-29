import Container from "../components/Container";
import Heading from "../components/Heading";

const TermClient = () => {
    return ( <Container>
        <Heading
            title="Terms & Conditions"
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
          text-lg font-bold text-neutral-700">
            1. Acceptance of Terms

            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
        State that by using the website, users agree to comply with and be bound by these terms and conditions.
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            2. Halal Food Only
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
        All recipes posted or shared on this website must adhere strictly to Halal standards as defined by the Department of Islamic Development Malaysia (JAKIM).
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            3.  Ingredients Verification
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
Users should verify that all ingredients listed in their recipes comply with the Halal standards set by JAKIM. The website assumes no responsibility for any non-Halal ingredients listed in the recipes.
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            4. User Responsibility
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
Users are responsible for confirming the Halal status of the ingredients they use in their recipes. If unsure about the Halal status of any ingredient, users should consult JAKIM or a reputable Halal certification body.
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            5. Removal of Non-Halal Content
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
The website reserves the right to remove any recipe found to include non-Halal ingredients, with or without notice to the user who posted the recipe.
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            6. Copyright Infringement
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
        We follow Malaysian Copyright Act 1987 to deal with copyright infringement notices. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on this site, please notify us as per the guidelines of the Act.
            </div>
            </div>

            <div className="
          text-lg font-bold text-neutral-700">
            7. Termination
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
        We reserve the right to terminate users accounts if they violate these terms and conditions.
            </div>
            </div>

           
          

           </div>
        </div>
    </Container> );
}
 
export default TermClient;