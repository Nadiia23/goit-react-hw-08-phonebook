import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/Contacts/contactsOperations';

import ContactForm from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
