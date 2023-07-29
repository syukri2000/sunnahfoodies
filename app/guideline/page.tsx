import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import GuideClient from "./GuideClient";


const GuidePage =async () => {

    return(
        <GuideClient
        />
    )
}

export default GuidePage;