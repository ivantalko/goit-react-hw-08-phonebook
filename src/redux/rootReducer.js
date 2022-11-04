import { combineReducers } from 'redux';
import phonebookReducer from './Phonebook.redux/phonebookSlice';
import filterReducer from './Phonebook.redux/FiltrSlice';

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
});
