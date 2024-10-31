import { useState, useEffect, useTransition, FormEvent } from 'react';
import useBreedList from './useBreedList';
import fullSearch from '../services/fullSearch';
import { useQuery } from '@tanstack/react-query';
import { Animal, PetAPIResponse, PetObj } from '../Types/APIResponsesTypes';


const useForm =  (setPets: (pets: PetObj[]) => void) => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '' as Animal,
        breed: '',
    });

    const [animal, setAnimal] = useState('' as Animal);
    const [breeds] = useBreedList(animal);
    const [isPending, startTransition] = useTransition();

    const { data, refetch, isSuccess } = useQuery({
        queryKey: ['search', requestParams],
        queryFn: fullSearch,
        enabled: Boolean(requestParams.animal),
    });

    useEffect(() => {
        if (isSuccess) {
            setPets(data?.pets);
        }
    }, [isSuccess, data, setPets]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setRequestParams({
            location: formData.get('location')?.toString() || '',
            animal: formData.get('animal')?.toString() as Animal || '',
            breed: formData.get('breed')?.toString() || '',
        });
        startTransition(() => {
            refetch();
        });
    };

    return {
        requestParams,
        setRequestParams,
        animal,
        setAnimal,
        breeds,
        isPending,
        handleSubmit,
    };
};

export default useForm;
