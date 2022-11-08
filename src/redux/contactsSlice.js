import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.status = Status.loading;
    },
    [fetchContacts.fulfilled](state, action) {
      state.status = Status.success;
      state.items = [...action.payload];
    },
    [fetchContacts.rejected](state) {
      state.status = Status.error;
    },
    [addContact.pending](state) {
      state.status = Status.loading;
    },
    [addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },
    [addContact.rejected](state) {
      state.status = Status.error;
    },
    [deleteContact.pending](state) {
      state.status = Status.loading;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state) {
      state.status = Status.error;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
