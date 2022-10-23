import { Component } from 'react';
import PropTypes from 'prop-types';
export class ContactList extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button onClick={() => this.props.delete(contact.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  delete: PropTypes.func.isRequired,
};
