import { Link, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState, lazy, Suspense } from 'react'
import AdoptedPetsContext from '../context/AdoptedPetsContext'
import '../style/App.css'
const Details = lazy(() => import('./Details'))
const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))

const queryClient = new QueryClient({
    defaultOptions: {
        staleTime: Infinity,
        cacheTime: Infinity,
        suspense: true,
    },
})
function App() {
    const [adoptedPets, setAdoptedPets] = useState([])

    useEffect(() => {
        const savedPets = localStorage.getItem('adoptedPets')
        if (savedPets) {
            setAdoptedPets(JSON.parse(savedPets))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets))
    }, [adoptedPets])

    return (
        <div>
            <AdoptedPetsContext.Provider value={[adoptedPets, setAdoptedPets]}>
                <Suspense
                    fallback={
                        <div className="flex h-screen items-center justify-center">
                            <h1 className="text-4xl font-extrabold">
                                Loading...🐶
                            </h1>
                        </div>
                    }
                >
                    <QueryClientProvider client={queryClient}>
                        <header className="">
                            <Link to="/">
                                <h1 className="text-4xl font-extrabold">
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
                    </QueryClientProvider>
                </Suspense>
            </AdoptedPetsContext.Provider>
        </div>
    )
}

export default App
