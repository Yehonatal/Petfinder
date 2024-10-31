import { QueryFunction } from "@tanstack/react-query"
import { Animal, PetAPIResponse } from "../Types/APIResponsesTypes"

interface IProps {
    location: string
    animal: Animal
    breed: string
}

const fullSearch: QueryFunction<PetAPIResponse, ["search", IProps]> = async ({ queryKey }) => {
    const { location, animal, breed } = queryKey[1]

    const apiRes = await fetch(
        `https://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal.toLowerCase()}&breed=${breed}`,
    )
    if (!apiRes.ok) {
        throw new Error(`API request failed with status ${apiRes.status}`)
    }

    const data = await apiRes.json()
    return data
}

export default fullSearch
