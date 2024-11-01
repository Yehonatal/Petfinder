import { createSlice } from "@reduxjs/toolkit";

export const adoptedPetSlice = createSlice({
    name: "adoptedPets",
    initialState: {
        pets: [],
    },
    reducers: {
        setAdoptedPets: (state, action) => {
            state.pets = action.payload;
        },
        addPet: (state, action) => {
            state.pets.push(action.payload);
            localStorage.setItem("adoptedPets", JSON.stringify(state.pets));
        },
    },
});

export const { setAdoptedPets, addPet } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
