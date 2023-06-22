import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";

const TripsPage = async() => {
    const currenUser = await getCurrentUser();

    if(!currenUser){
        return(
            <EmptyState
                title="Unauthorized user"
                subtitle="Please login"
            />
        )
    }
}
export default TripsPage;