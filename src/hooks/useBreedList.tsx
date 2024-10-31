import { QueryStatus, useQuery } from '@tanstack/react-query'
import fetchBreedListByAnimal from '../services/fetchBreedListByAnimal'
import { Animal, BreedListApiResponse } from '../Types/APIResponsesTypes'

export default function useBreedList(animal: Animal) {
    const results = useQuery({
        queryKey: ['breeds', animal],
        queryFn: fetchBreedListByAnimal,
        enabled: !!animal,
    })

    return [results?.data?.breeds ?? [], results.status] as [string[], QueryStatus]
}
