const fetchPetDetails = async ({ queryKey }) => {
    const id = queryKey[1]
    const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)

    if (!apiRes) {
        throw new Error(`API request failed with status ${apiRes.status}`)
    }

    const data = await apiRes.json()
    return data
}

export default fetchPetDetails
