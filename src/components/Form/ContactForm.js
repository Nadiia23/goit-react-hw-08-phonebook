import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './contactForm.module.css';

export const Phonebook = ({onSubmit}) => {
  
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const onChangeName = event => {
    // const { name, value } = event.currentTarget;

    // this.setState({
    //   [name]: value,
    // });
    setName(event.currentTarget.value)
  };

  const onChangeNumber = event => {
    setNumber(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    // const {name, number} = this.state
    onSubmit(name, number);
    // this.setState({ name: '', number: '' });
    setName('');
    setNumber('');
  };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor="name">Name</label>
          <input className={s.input}
            value={name}
            onChange={onChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={s.label} htmlFor="input">Number</label>
          <input className={s.input}
            value={number}
            onChange={onChangeNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={s.btnAdd} type="submit">Add contact</button>
        </form>
    );
  }

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
