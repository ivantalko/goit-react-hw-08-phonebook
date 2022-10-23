import { Component } from 'react';
import PropTypes from 'prop-types';
export class FilterContacts extends Component {
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <label htmlFor="input">Find contacts by name</label>
        <input type="text" name="filter" onChange={this.props.onChangeName} />
      </>
    );
  }
}

FilterContacts.propTypse = {
  onChange: PropTypes.func.isRequired,
};
