import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/Contacts/filterSlice';
import s from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const getFilteredContacts = event => {
    const filtered = event.target;

    dispatch(filterContacts(filtered.value));
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}
    >
      <label className={s.labelTitle} htmlFor="filter">
        Find contacts by name
        <input
          className={s.input}
          name="filter"
          type="text"
          onChange={getFilteredContacts}
        />
      </label>
    </div>
  );
};

export default Filter;
