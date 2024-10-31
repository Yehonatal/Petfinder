export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

export interface PetObj  {
    id: number,
    name: string,
    animal: Animal,
    description: string
    breed: string,
    images: string[],
    city: string,
    state: string,
}

export interface PetAPIResponse {
    numberOfResults: number,
    startIndex: number,
    endIndex:number,
    hasNext: boolean,
    pets: PetObj[]
}

export interface BreedListApiResponse {
    animal: Animal,
    breeds: string[]
}