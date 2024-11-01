import { Link, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, lazy, Suspense } from 'react'
// import AdoptedPetsContext from '../context/AdoptedPetsContext'
import { Provider } from 'react-redux'
import store from '../store'
import '../style/App.css'
// import { PetObj } from '../Types/APIResponsesTypes'
const Details = lazy(() => import('./Details'))
const Home = lazy(() => import('./Home'))
const NotFound = lazy(() => import('./NotFound'))

const queryClient = new QueryClient({
    defaultOptions: {
        staleTime: Infinity,
        cacheTime: Infinity,
        suspense: true,
    } as any,
})
function App() {
    // const [adoptedPets, setAdoptedPets] = useState<PetObj[]>([])

    // useEffect(() => {
    //     const savedPets = localStorage.getItem('adoptedPets')
    //     if (savedPets) {
    //         setAdoptedPets(JSON.parse(savedPets))
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('adoptedPets', JSON.stringify(adoptedPets))
    // }, [adoptedPets])

    return (
        <div>
            <Provider store={store}>
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
                            <Route  path="/" element={<Home />} />
                            <Route
                                path="/details/:id"
                                element={<Details />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </QueryClientProvider>
                </Suspense>
            </Provider>
        </div>
    )
}

export default App
