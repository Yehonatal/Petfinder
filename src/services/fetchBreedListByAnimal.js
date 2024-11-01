const fetchBreedListByAnimal = async ({ queryKey }) => {
    const animal = queryKey[1];

    const apiRes = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal.toLowerCase()}`,
    );

    if (!apiRes.ok) {
        throw new Error(`API request failed with status ${apiRes.status}`);
    }
    const data = await apiRes.json();

    return data;
};

export default fetchBreedListByAnimal;
