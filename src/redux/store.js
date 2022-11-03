import { createStore } from 'redux';
import { contactsReducer } from './Phonebook.redux/reducer.Phonebook';
export const store = createStore(contactsReducer);
