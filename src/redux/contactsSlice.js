import { createSlice } from "@reduxjs/toolkit";
import contact from '../data/contact.json'
const initialState = {
    contacts: contact,
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContacts: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        addContacts: (state, action) => {
            state.contacts.push(action.payload);
        },

    },
});

export const contactsReducer = slice.reducer;
export const { deleteContacts, addContacts } = slice.actions;