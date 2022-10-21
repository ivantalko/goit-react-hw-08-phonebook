import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  onChangeName = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, number: this.state.number, id: nanoid() },
        ],
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
          onChangeName={this.onChangeName}
          handleSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
