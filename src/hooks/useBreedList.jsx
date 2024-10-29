import { useQuery } from '@tanstack/react-query'
import fetchBreedListByAnimal from '../services/fetchBreedListByAnimal'

export default function useBreedList(animal) {
    const results = useQuery({
        queryKey: ['breeds', animal],
        queryFn: fetchBreedListByAnimal,
        enabled: !!animal,
    })

    return [results?.data?.breeds ?? [], results.status]
}
