import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import ContactForm from "components/Form/ContactForm";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/Contacts/contactsOperations";
import { selectError, selectIsLoading } from "redux/Contacts/selector";

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <Filter />
            {isLoading && !error ? <Loader/> : <ContactList/>}
            
        </div>
    )
}