import { createSlice } from "@reduxjs/toolkit";

const petSlice = createSlice({
    name: "pets",
    initialState: {
        pets: [],
    },
    reducers: {
        setPets: (state, action) => {
            state.pets = action.payload;
        },
    },
});

export const { setPets } = petSlice.actions;
export default petSlice.reducer;
