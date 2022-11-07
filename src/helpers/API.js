import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get(
    `https://63691e2d28cd16bba7156c5f.mockapi.io/contacts/contacts`
  );
  return data;
};
export const addContact = async contact => {
  const { data } = await axios.post(
    `https://63691e2d28cd16bba7156c5f.mockapi.io/contacts/contacts`,
    contact
  );
  return data;
};
export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://63691e2d28cd16bba7156c5f.mockapi.io/contacts/contacts/${id}`
  );
  return data;
};
