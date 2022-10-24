import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './contactForm.module.css';

export class Phonebook extends Component {
  
  state = {
    name: '',
    number: '',
  };

  onChangeName = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {name, number} = this.state
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };


  render() {
    const { name, number } = this.state;
    return (
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label} htmlFor="name">Name</label>
          <input className={s.input}
            value={name}
            onChange={this.onChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={s.label} htmlFor="input">Number</label>
          <input className={s.input}
            value={number}
            onChange={this.onChangeName}
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
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
