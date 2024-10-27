const fullSearch = async ({ queryKey }) => {
    const { location, animal, breed } = queryKey[1];
    const apiRes = await fetch(
        `https://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal.toLowerCase()}&breed=${breed}`
    );
    if (!apiRes) {
        throw new Error(`API request failed with status ${apiRes.status}`);
    }

    const data = await apiRes.json();
    return data;
};

export default fullSearch;
