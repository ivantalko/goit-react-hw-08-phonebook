import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsData } from 'redux/Phonebook.redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        gap: 10,
      }}
    >
      <ContactForm />
      <FilterContacts />
      <ContactList />
    </div>
  );
};
