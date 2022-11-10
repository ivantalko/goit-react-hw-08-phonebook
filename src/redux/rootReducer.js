import { combineReducers } from 'redux';
import phonebookReducer from './Phonebook.redux/phonebookSlice';
import filterReducer from './Phonebook.redux/FiltrSlice';
import registrSlice from '../redux/Autorization/Registation.slice';

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
  registr: registrSlice,
});
