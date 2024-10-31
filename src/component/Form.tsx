/* eslint-disable react/prop-types */
import useForm from '../hooks/useForm'
import {Animal, PetObj} from "../Types/APIResponsesTypes"

interface IPropsSetter {
    setPets: (pets: PetObj[]) => void;
}

const Form = ({ setPets }: IPropsSetter) => {
    const ANIMALS: Animal[] = ["cat", "dog", "bird","reptile","rabbit"]    
    const {
            requestParams,
            setRequestParams,
            animal,
            setAnimal,
            breeds,
            isPending,
            handleSubmit,
        } = useForm(setPets);

    return (
        <form
            className="flex gap-6 bg-transparent px-6 pt-6 lg:flex-col lg:p-6"
            onSubmit={handleSubmit}
        >
            <label htmlFor="location" className="">
                <input
                    className="container_border form-input w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
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
                        setAnimal(e.target.value as Animal)
                        setRequestParams((prev) => ({
                            ...prev,
                            animal: e.target.value.toLowerCase() as Animal,
                            breed: '',
                        }))
                    }}
                >
                    <option value="">Select an Animal</option>
                    {ANIMALS.map((a: string) => (
                        <option key={a}>{String(a).charAt(0).toUpperCase() + String(a).slice(1)}</option>
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
                    {breeds.map((b: string) => (
                        <option key={b}>{b}</option>
                    ))}
                </select>
            </label>

            {isPending ? (
                <div>
                    <button
                        className="container_border w-full bg-[#535bf2] px-4 py-2 text-white hover:bg-[#4548f5] focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                        type="submit"
                    >
                        Loading ...
                    </button>
                </div>
            ) : (
                <button
                    className="container_border w-full bg-[#535bf2] px-4 py-2 text-white hover:bg-[#4548f5] focus:outline-none focus:ring-2 focus:ring-[#535bf2]"
                    type="submit"
                >
                    Search Pets
                </button>
            )}
        </form>
    )
}

export default Form
