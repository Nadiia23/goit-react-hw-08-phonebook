import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import s from './filter.module.css'

const Filter = () => {
      const dispatch = useDispatch();
    
    const getFilteredContacts = event => {
        const filtered = event.target;
        
        dispatch(filterContacts(filtered.value))
    }
    return (
        <div style={{
            display: 'flex',
            gap: 20,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 30,
      }}>
         <label  className={s.labelTitle}>Find contacts by name</label>
        <input className={s.input}
          type="text"
          name="filter"
          onChange={getFilteredContacts}
        />
        </div>
  );
};
export default Filter;