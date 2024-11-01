import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const petApi = createApi({
    reducerPath: "petApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pets-v2.dev-apis.com",
        headers: {
            "Content-Type": "application/json",
            // Authorization: "your_api_key_here",
        },
    }),
    endpoints: (builder) => ({
        getPet: builder.query({
            query: (id) => ({ url: "pets", params: { id } }),
            transformResponse: (response) => response.pets[0],
        }),
        getBreed: builder.query({
            query: (animal) => ({ url: "breeds", params: { animal } }),
            transformResponse: (response) => response.breeds,
        }),
        getPets: builder.query({
            query: ({ animal, location, breed }) => ({
                url: "pets",
                params: { animal, location, breed },
            }),
            transformResponse: (response) => response.pets,
        }),
    }),
});

export const { useGetPetQuery, useGetBreedQuery, useGetPetsQuery } = petApi;
