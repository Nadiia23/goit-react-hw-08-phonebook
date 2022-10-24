import React, { Component } from 'react';
import { Phonebook } from './Form/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const CONTACTS_LIST_LOCAL_KEY = 'contacts';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };



  componentDidMount() {
    const localContacts = localStorage.getItem(CONTACTS_LIST_LOCAL_KEY);
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(_, prevState) {
    const contacts = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_LIST_LOCAL_KEY, JSON.stringify(this.state.contacts));
    }
  }



  handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };

   getFilteredContacts = event => {
     this.setState({ filter: event.currentTarget.value.toLowerCase() });
  };


  handleSubmit = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };


  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    
    return (
      <div style={{
        display: 'flex',
        flexDirection:'column',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}>
        <h1>Phonebook</h1>
        <Phonebook
           onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.getFilteredContacts} />
        
        <ContactList
          contacts={visibleContacts}
          onDelete={this.handleDeleteUser} />
      </div>
    );
  }
}

export default App;