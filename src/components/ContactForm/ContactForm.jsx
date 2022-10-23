import { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handelSubmitTow = event => {
    event.preventDefault();
    this.props.phoneSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };
  onChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handelSubmitTow}>
          <label htmlFor="input">Name</label>
          <input
            value={this.state.name}
            onChange={this.onChangeName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="input">Number</label>
          <input
            value={this.state.number}
            onChange={this.onChangeName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit">Add conact</button>
        </form>
      </>
    );
  }
}
ContactForm.propTypes = {
  phoneSubmit: PropTypes.func.isRequired,
};
