import { Component } from 'react';
export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handelSubmit = event => {
    event.preventDefault();
    this.props.phoneSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
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
        <label htmlFor="input">Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onChangeName}
        />
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button onClick={() => this.props.delate(contact.id)}>
                delate
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
