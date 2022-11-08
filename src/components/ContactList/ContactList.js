import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selector";
import PropTypes from 'prop-types';
import ContactListItem from "./ContactListItem";
import s from './contactList.module.css';

const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);

    return (
        <ul className={s.contactsList}>
            {visibleContacts.map(contact => {
                return (
                    <ContactListItem
                        contact={contact}
                        key={contact.id}
                    />
                )
             })}
        </ul>
    )
}

ContactList.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactList;