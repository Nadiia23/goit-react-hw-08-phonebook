import React, { useState, useEffect } from 'react';
import { Phonebook } from './Form/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const CONTACTS_LIST_LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const changeContacts = localStorage.getItem('contacts');
    if (changeContacts) {
      return JSON.parse(changeContacts);
    } return []
  });

  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const localContacts = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
  //   const parsedContacts = JSON.parse(localContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteUser = id => {
    setContacts(contacts => contacts.filter(item => item.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevContacts => {
      return [...prevContacts, { name, number, id: nanoid() }];
    });
  };

  // const visibleContacts = contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter)
  //   );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactList
        contacts={getFilteredContacts()}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
