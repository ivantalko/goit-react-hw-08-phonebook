import PropTypes from 'prop-types';
export const FilterContacts = ({ onChangeName }) => {
  return (
    <>
      <h2>Contacts</h2>
      <label htmlFor="input">Find contacts by name</label>
      <input type="text" name="filter" onChange={onChangeName} />
    </>
  );
};

FilterContacts.propTypse = {
  onChange: PropTypes.func.isRequired,
};
