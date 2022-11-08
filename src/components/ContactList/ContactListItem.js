import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import s from './contactList.module.css';

const ContactListItem = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <li className={s.contactsItem} key={contact.id} >
                <p className={s.contactsName}>{contact.name}:</p>
                <a className={s.contactsNumber} href={"tell:" + contact.phone}>{contact.phone}</a>
                <button
                    className={s.btnDelete}
                    type="button"
                    onClick={handleDelete}
                >Delete</button>       
        </li>
    )
}

export default ContactListItem;