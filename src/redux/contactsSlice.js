import { createSlice } from "@reduxjs/toolkit";
import contact from '../data/contact.json'
const initialState = {
    contacts: contact,
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },

    },
});

export const contactsReducer = slice.reducer;
export const { deleteContact, addContact } = slice.actions;
export const selectContacts = state => state.contacts.items;
