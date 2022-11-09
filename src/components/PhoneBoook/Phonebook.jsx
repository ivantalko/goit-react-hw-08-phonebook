import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsData } from 'redux/Phonebook.redux/operations';

export const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return (
    <>
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
    </>
  );
};
