import { useContext, useState, lazy } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import fetchPetDetails from '../services/fetchPetDetails'
import AdoptedPetsContext from '../context/AdoptedPetsContext'
import Carousel from './Carousel'
import ErrorBoundary from '../services/ErrorBoundary'

const Modal = lazy(() => import('./Modal'))


const Details = () => {
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const context = useContext(AdoptedPetsContext)
    if (!context){
        throw new Error("I need context my G!")
    }
    const {adoptedPets, setAdoptedPets} = context

    const { id } = useParams()
    if (!id){
        throw new Error("I need an Id my brother!!")
    }
    const results = useQuery({
        queryKey: ['details', id],
        queryFn: fetchPetDetails,
        enabled: !!id,
    })

    if (results.isLoading)
        return (
            <div className="loading-pane">
                <h2 className="loading">Loading...</h2>
            </div>
        )

    const pet  = results?.data?.pets[0]

    if (!pet){
        throw new Error("Come on No pets? found!")
    }
    return (
        <div className="mt-10 flex max-h-max flex-col gap-4 lg:flex-row">
            <div className="container_border order-2 pt-4 shadow-lg lg:order-1 lg:h-[80vh] lg:w-[450px]">
                <h2 className="text-2xl font-extrabold uppercase">
                    {pet.name}
                </h2>
                <p>
                    {pet.animal.toUpperCase()} - {pet.breed} - {pet.city},{' '}
                    {pet.state}{' '}
                </p>
                <hr className="my-4" />
                <div className="">
                    <h3 className="p-6 text-left text-xl font-extrabold">
                        Pet Story
                    </h3>
                    <p className="px-6 text-left">{pet.description}</p>
                </div>

                <div>
                    <h3 className="p-6 text-left text-xl font-extrabold">
                        Pet History
                    </h3>
                    <p className="px-6 text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iure, perspiciatis facere! Sapiente repellat at
                        deserunt aliquid maiores reiciendis pariatur asperiores
                        vel iste dolores, nobis enim.
                    </p>
                </div>

                <div>
                    <h3 className="p-6 text-left text-xl font-extrabold">
                        Pet Character Trait and Behavior
                    </h3>
                    <p className="px-6 text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Iure, perspiciatis facere! Sapiente repellat at
                        deserunt aliquid maiores reiciendis pariatur asperiores
                        vel iste dolores, nobis enim.
                    </p>
                </div>
                <button className="mt-4" onClick={() => setShowModal(true)}>
                    I WANT TO ADOPT{' '}
                    <span className="font-extrabold text-[#646cff]">
                        {pet.name.toUpperCase()}
                    </span>
                </button>

                {showModal ? (
                    <Modal>
                        <div className="container_border m-2 flex flex-col p-8 text-center shadow-lg">
                            <h1>Are you sure you want to adopt {pet.name}?</h1>
                            <div className="buttons mt-4 flex justify-center gap-4">
                                <button
                                    onClick={() => {
                                        setAdoptedPets([...adoptedPets, pet])
                                        navigate(`/`)
                                    }}
                                >
                                    Yes
                                </button>
                                <button onClick={() => setShowModal(false)}>
                                    No
                                </button>
                            </div>
                        </div>
                    </Modal>
                ) : null}
            </div>
            <div className="container_border order-1 flex flex-1 flex-col justify-between shadow-lg lg:order-2">
                <Carousel images={pet.images} />
            </div>
        </div>
    )
}



export default function DetailsErrorBoundary(){
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    )
}
