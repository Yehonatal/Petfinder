/* eslint-disable react/prop-types */
import { ANIMALS, useForm } from "../hooks/useForm";
import {
    setAnimalP,
    setLocation,
    setBreed,
} from "../features/searchParamSlice";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
    const { handleSubmit, animal, breeds, setAnimal } = useForm();
    const location = useSelector((state) => state.searchParams.value.location);
    const breed = useSelector((state) => state.searchParams.value.breed);
    const dispatch = useDispatch();

    return (
        <form
            className="flex lg:flex-col gap-6 pt-6 px-6 lg:p-6 bg-transparent"
            onSubmit={handleSubmit}
        >
            <label htmlFor="location" className="">
                <input
                    className="w-full px-4 py-2 container_border focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => dispatch(setLocation(e.target.value))}
                />
            </label>
            <label htmlFor="animal" className="">
                <select
                    className="w-full px-4 py-2 container_border focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
                    id="animal"
                    name="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        dispatch(setAnimalP(e.target.value.toLowerCase()));
                    }}
                >
                    <option value="">Select an animal</option>
                    {ANIMALS.map((a) => (
                        <option key={a} value={a}>
                            {a}
                        </option>
                    ))}
                </select>
            </label>
            <label htmlFor="breed" className="">
                <select
                    id="breed"
                    className="w-full px-4 py-2 container_border focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
                    disabled={!breeds || breeds.length === 0}
                    name="breed"
                    value={breed}
                    onChange={(e) => {
                        dispatch(setBreed(e.target.value));
                    }}
                >
                    <option value="">Available breeds</option>
                    {breeds && breeds.map((b) => (
                        <option key={b} value={b}>
                            {b}
                        </option>
                    ))}
                </select>
            </label>
            <button className="border-[2px]">Search for Pet</button>
        </form>
    );
};

export default Form;
