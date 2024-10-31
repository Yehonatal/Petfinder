import {QueryFunction} from "@tanstack/react-query"
import {PetAPIResponse} from "../Types/APIResponsesTypes"

const fetchPetDetails : QueryFunction<PetAPIResponse, ["details", string]> = async ({ queryKey }) => {
    const id = queryKey[1]
    const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)

    if (!apiRes.ok) {
        throw new Error(`API request failed with status ${apiRes.status}`)
    }

    const data = await apiRes.json()
    return data
}

export default fetchPetDetails
