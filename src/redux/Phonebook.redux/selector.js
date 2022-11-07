export const getFilteredContacts = state => {
  return state.phonebook.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  );
};
export const getFilter = state => state.filter.filter;
