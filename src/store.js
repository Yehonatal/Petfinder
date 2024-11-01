import { configureStore } from "@reduxjs/toolkit";
import adoptedPets from "./features/AdoptedPetSlice";
import searchParams from "./features/searchParamSlice";
import petReducer from "./features/petSlice";
import { petApi } from "./services/petApiService";

const store = configureStore({
    reducer: {
        adoptedPets,
        searchParams,
        getPets: petReducer,
        [petApi.reducerPath]: petApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
