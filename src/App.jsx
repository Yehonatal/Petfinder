import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

const Home = lazy(() => import("./component/Home"));
const Details = lazy(() => import("./component/Details"));
const NotFound = lazy(() => import("./component/NotFound"));

const queryClient = new QueryClient({
    defaultOptions: {
        staleTime: Infinity,
        cacheTime: Infinity,
    },
});
function App() {
    
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Suspense
                    fallback={
                        <div className="flex justify-center items-center h-screen">
                            <span className="text-4xl font-extrabold">
                                Loading...
                            </span>
                        </div>
                    }
                >
                    <Provider store={store}>
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
                    </Provider>
                </Suspense>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
