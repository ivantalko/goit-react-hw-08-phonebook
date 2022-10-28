import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const getContact = localStorage.getItem('contacts');
    if (getContact) {
      return JSON.parse(getContact);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteUser = id => {
    setContacts(contacts => {
      return contacts.filter(item => item.id !== id);
    });
  };
  const getFilteredContacts = () => {
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const onChangeName = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevContacts => {
      return [...prevContacts, { name, number, id: nanoid() }];
    });
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
