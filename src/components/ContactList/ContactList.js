import { useSelector } from "react-redux";
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './contactList.module.css';
import { getContacts, getContactsFilter } from "redux/selector";



const getVisibleContacts = (contacts, filteredContacts) => {
    const normalizedFilter = filteredContacts.value?.toLowerCase() || '';

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)          
    ); 
}

const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filteredContacts = useSelector(getContactsFilter);
    const visibleContacts = getVisibleContacts(contacts, filteredContacts)

    return (
      
    <ul className={s.contactsList}>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
              id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};

export default ContactList;