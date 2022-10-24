import PropTypes from 'prop-types';
import s from './filter.module.css'

export const Filter = ({value, onChange }) => {
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
          value={value}
          onChange={onChange}
        />
        </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};