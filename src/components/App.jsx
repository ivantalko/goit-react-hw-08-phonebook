import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleDeleteUser = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };
  getFilteredContacts = () => {
    return this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  onChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      return alert(`$(name) is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 10,
        }}
      >
        <Phonebook
          phoneSubmit={this.handleSubmit}
          onChangeName={this.onChangeName}
          contacts={this.getFilteredContacts()}
          filter={this.state.filter}
          delate={this.handleDeleteUser}
        />
      </div>
    );
  }
}
