import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import fullSearch from "../services/fullSearch";
import { useQuery } from "@tanstack/react-query";
/* eslint-disable react/prop-types */
const ANIMALS = ["Cat", "Dog", "Rabbit", "Reptile", "Bird"];

const Form = ({ setPets }) => {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const { data, refetch, isSuccess } = useQuery({
        queryKey: ["searchPets", requestParams],
        queryFn: fullSearch,
        enabled: Boolean(requestParams.animal),
        onSuccess: (data) => {
            setPets(data.pets);
        },
        onError: (error) => {
            console.error("Error fetching pets:", error);
        },
    });

    useEffect(() => {
        if (isSuccess) {
            setPets(data?.pets);
        }
    }, [isSuccess, data, setPets]);

    return (
        <form
            className="flex flex-col gap-6 p-6 bg-transparent"
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                setRequestParams({
                    location: formData.get("location") || "",
                    animal: formData.get("animal") || "",
                    breed: formData.get("breed") || "",
                });
                refetch();
            }}
        >
            <label htmlFor="location" className="">
                <input
                    className="w-full px-4 py-2 container_border  focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
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
                    className="w-full px-4 py-2 container_border  focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
                    id="animal"
                    value={animal}
                    onChange={(e) => {
                        setAnimal(e.target.value);
                        setRequestParams((prev) => ({
                            ...prev,
                            animal: e.target.value,
                            breed: "",
                        }));
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
                    className="w-full px-4 py-2 container_border  focus:ring-2 focus:ring-[#535bf2] focus:outline-none"
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
        </form>
    );
};

export default Form;
