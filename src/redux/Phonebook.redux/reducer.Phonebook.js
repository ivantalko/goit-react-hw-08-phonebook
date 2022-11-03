import { addContact, changeFilter, deleteContact } from './typseactions';

const initialState = {
  contacts: [],
  filter: '',
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case changeFilter:
      return { ...state, filter: action.payload };
    case deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
