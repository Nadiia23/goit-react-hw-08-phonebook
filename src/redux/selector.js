import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectContactsFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filteredContacts) => {
    const normalizedFilter = filteredContacts.value?.toLowerCase() || '';

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
