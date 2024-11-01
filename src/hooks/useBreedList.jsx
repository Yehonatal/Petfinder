import { useGetBreedQuery } from "../services/petApiService";

export default function useBreedList(animal) {
    const { data: breeds } = useGetBreedQuery(animal.toLowerCase(), {
        skip: !animal,
    });

    if (!animal) {
        return [[], false];
    }
    return [breeds ?? [], true];
}
