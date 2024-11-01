import { configureStore } from "@reduxjs/toolkit";
import adoptedPets from "./features/AdoptedPetSlice";
import searchParams from "./features/searchParamSlice";

const store = configureStore({
    reducer: {
        adoptedPets,
        searchParams,
    },
});

export default store;
