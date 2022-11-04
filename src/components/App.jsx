import Phonebook from './Form/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';



export const App = () => {
  

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
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};

export default App;
