import { createSlice } from "@reduxjs/toolkit";

const searchParamSlice = createSlice({
    name: "searchParams",
    initialState: {
        value: {
            location: "",
            animal: "",
            breed: "",
        }
    },
    reducers: {
        all: (state, action) => {
            state.value.location = action.payload.location;
            state.value.animal = action.payload.animal;
            state.value.breed = action.payload.breed;
        },
        setLocation: (state, action) => {
            state.value.location = action.payload;
        },
        setAnimalP: (state, action) => {
            state.value.animal = action.payload;
        },
        setBreed: (state, action) => {
            state.value.breed = action.payload;
        }
    },
});

export const { all, setLocation, setAnimalP, setBreed } = searchParamSlice.actions;
export default searchParamSlice.reducer;
   