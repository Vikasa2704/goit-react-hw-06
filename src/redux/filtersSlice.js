import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: '',
}


const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});
export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;

export const selectFilter = state => state.filters.name;
