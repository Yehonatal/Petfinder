import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import fullSearch from "../services/fullSearch";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { all } from "../features/searchParamSlice";
export const ANIMALS = ["Cat", "Dog", "Rabbit", "Reptile", "Bird"];

export const useForm = (setPets) => {
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);
    const dispatch = useDispatch();
    const requestParams = useSelector((state) => state.searchParams.value);

    const { data, refetch, isSuccess } = useQuery({
        queryKey: ["searchPets", requestParams],
        queryFn: fullSearch,
        enabled: Boolean(useSelector((state) => state.searchParams.value.animal)),
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
            location: formData.get("location") || "",
            animal: formData.get("animal") || "",
            breed: formData.get("breed") || "",
        }
        dispatch(all(obj))
        refetch();
    };

    return {
        handleSubmit,
        animal,
        breeds,
        requestParams,
        setAnimal,
        dispatch,
        setPets,
    };
};
