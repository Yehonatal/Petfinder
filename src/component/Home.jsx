import Search from "./Search";
import Results from "./Results";
import { useSelector } from "react-redux";

const Home = () => {
    let pets = useSelector((state) => state.getPets.pets) || [];
    return (
        <div className="flex flex-col lg:flex-row md:flex-row gap-4 max-h-max  mt-10">
            <Search />
            <Results pets={pets} />
        </div>
    );
};

export default Home;
