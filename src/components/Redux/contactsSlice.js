import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    onDelete(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid(5) } };
      },
    },
  },
});

export const contactReducer = contactSlise.reducer;
export const { onDelete, addContacts } = contactSlise.actions;
