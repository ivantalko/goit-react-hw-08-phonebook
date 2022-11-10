import { combineReducers } from 'redux';
import phonebookReducer from './Phonebook.redux/phonebookSlice';
import filterReducer from './Phonebook.redux/FiltrSlice';
import registrReducer from '../redux/Autorization/Registation.slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
const persistConfig = {
  key: 'notes',
  storage,
  whitelist: ['token'],
};
const persistedRegistrReducer = persistReducer(persistConfig, registrReducer);
export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
  registr: persistedRegistrReducer,
});
