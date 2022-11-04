import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';

export const App = () => {
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
