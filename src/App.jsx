import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AdoptedPetsContext from "./context/AdoptedPetsContext";
import Home from "./component/Home";
import Details from "./component/Details";
import NotFound from "./component/NotFound";
import "./App.css";

const queryClient = new QueryClient({
    defaultOptions: {
        staleTime: Infinity,
        cacheTime: Infinity,
    },
});
function App() {
    const [adoptedPets, setAdoptedPets] = useState(() => {
        try {
            const savedPets = JSON.parse(localStorage.getItem("adoptedPets"));
            return savedPets || [];
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("adoptedPets", JSON.stringify(adoptedPets));
        } catch (error) {
            console.error("Failed to save to localStorage:", error);
        }
    }, [adoptedPets]);
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetsContext.Provider
                    value={[adoptedPets, setAdoptedPets]}
                >
                    <header className="">
                        <Link to="/">
                            <h1 className="font-extrabold text-4xl ">
                                Find Apet.com
                            </h1>
                        </Link>
                    </header>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/details/:id"
                            element={<Details />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AdoptedPetsContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
