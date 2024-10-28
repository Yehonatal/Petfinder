import Search from "./Search";
import Results from "./Results";
import { useState } from "react";

const Home = () => {
    const [pets, setPets] = useState([]);

    return (
        <div className="flex flex-col lg:flex-row gap-4 max-h-max  mt-10">
            <Search setPets={setPets} />
            <Results pets={pets} />
        </div>
    );
};

export default Home;
