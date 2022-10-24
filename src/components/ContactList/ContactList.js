import { ContactListItem } from './ContactListItem';
import PropTypes from 'prop-types';
import s from './contactList.module.css'

export const ContactList = ({ contacts, onDelete }) => {
    return (
      
    <ul className={s.contactsList}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
              id={id}
              onDelete={onDelete}
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
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};