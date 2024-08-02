import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
		name: '',
	},
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    }
  }
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectFilter = (store) => store.filters.name;
