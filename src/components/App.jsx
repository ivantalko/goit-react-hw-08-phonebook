import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  changeFilterAction,
  deleteContactAction,
} from 'redux/Phonebook.redux/actionList';
// import { addContact } from 'redux/Phonebook.redux/typseactions';

export const App = () => {
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // const [contacts, setContacts] = useState(() => {
  //   const getContact = localStorage.getItem('contacts');
  //   if (getContact) {
  //     return JSON.parse(getContact);
  //   }
  //   return [];
  // });
  // useEffect(() => {
  //   const getContact = localStorage.getItem('contacts');
  //   if (getContact) {
  //     return JSON.parse(getContact);
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContactAction(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onChangeName = event => {
    dispatch(changeFilterAction(event.target.value));
    // setFilter(event.target.value);
  };

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactAction({ name, number, id: nanoid() }));
    // setContacts(prevContacts => {
    //   return [...prevContacts, { name, number, id: nanoid() }];
  };

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
      <ContactForm phoneSubmit={handleSubmit} />
      <FilterContacts onChangeName={onChangeName} />
      <ContactList
        contacts={getFilteredContacts()}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};
