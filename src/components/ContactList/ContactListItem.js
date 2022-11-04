import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import s from './contactList.module.css';


export const ContactListItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={s.contactsItem} key={id}>
              <p className={s.contactsName}>{name} : <span className={s.contactsNumber}>{number}</span></p>
              <button className={s.btnDelete} onClick={handleDelete}>
                Delete
              </button>
            </li>
  );
};

export default ContactListItem;