/* eslint-disable react/prop-types */
import { useState, useEffect, useTransition } from 'react'
import useBreedList from '../hooks/useBreedList'
import fullSearch from '../services/fullSearch'
import { useQuery } from '@tanstack/react-query'
import { ANIMALS } from '../hooks/useForm'

const Form = ({ setPets }) => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '',
        breed: '',
    })

    const [animal, setAnimal] = useState('')
    const [breeds] = useBreedList(animal)
    const [isPending, startTransition] = useTransition()

    const { data, refetch, isSuccess } = useQuery({
        queryKey: ['searchPets', requestParams],
        queryFn: fullSearch,
        enabled: Boolean(requestParams.animal),
        onSuccess: (data) => {
            setPets(data.pets)
        },
        onError: (error) => {
            console.error('Error fetching pets:', error)
        },
    })

    useEffect(() => {
        if (isSuccess) {
            setPets(data?.pets)
        }
    }, [isSuccess, data, setPets])

    return (
        <form
            className="flex gap-6 bg-transparent px-6 pt-6 lg:flex-col lg:p-6"
            onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                setRequestParams({
                    location: formData.get('location') || '',
                    animal: formData.get('animal') || '',
                    breed: formData.get('breed') || '',
                })
                startTransition(() => {
                    refetch()
                 })
            }}
        >
            <label htmlFor="location" className="">
                <input
                    className="form-input container_border w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    value={requestParams.location}
                    onChange={(e) =>
                        setRequestParams((prev) => ({
                            ...prev,
                            location: e.target.value,
                        }))
                    }
                />
            </label>
            <label htmlFor="animal" className="">
                <select
                    className="container_border w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value)
                        setRequestParams((prev) => ({
                            ...prev,
                            animal: e.target.value,
                            breed: '',
                        }))
                    }}
                >
                    <option value="">Select an animal</option>
                    {ANIMALS.map((a) => (
                        <option key={a}>{a}</option>
                    ))}
                </select>
            </label>
            <label htmlFor="breed" className="">
                <select
                    id="breed"
                    className="container_border w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#535bf2] disabled:opacity-50"
                    disabled={breeds.length === 0}
                    name="breed"
                    value={requestParams.breed}
                    onChange={(e) =>
                        setRequestParams((prev) => ({
                            ...prev,
                            breed: e.target.value,
                        }))
                    }
                >
                    <option value="">Available breeds</option>
                    {breeds.map((b) => (
                        <option key={b}>{b}</option>
                    ))}
                </select>
            </label>

            {isPending ? (
             <div>
                <button
                    className="container_border w-full px-4 py-2 text-white bg-[#535bf2] hover:bg-[#4548f5] focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                    type="submit"
                >
                    Loading ...
                </button>
             </div>   
            ):(
                <button
                    className="container_border w-full px-4 py-2 text-white bg-[#535bf2] hover:bg-[#4548f5] focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                    type="submit"
                >
                    Search Pets
                </button>
            )}
        </form>
    )
}

export default Form
