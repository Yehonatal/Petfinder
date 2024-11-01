import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import { useDispatch, useSelector } from "react-redux";
import { all } from "../features/searchParamSlice";
import { useGetPetsQuery } from "../services/petApiService";
import { setPets } from "../features/petSlice";
export const ANIMALS = ["Cat", "Dog", "Rabbit", "Reptile", "Bird"];
export const useForm = () => {
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);
    const dispatch = useDispatch();
    const requestParams = useSelector((state) => state.searchParams.value);

    let { data: pets } = useGetPetsQuery(requestParams);
    pets = pets ?? [];

    useEffect(() => {
        if (Array.isArray(pets) && pets.length > 0) {
            dispatch(setPets(pets));
        }
    }, [pets, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
            location: formData.get("location") || "",
            animal: formData.get("animal") || "",
            breed: formData.get("breed") || "",
        };
        dispatch(all(obj));
    };

    return {
        handleSubmit,
        animal,
        breeds,
        setAnimal,
        dispatch,
        setPets,
    };
};
