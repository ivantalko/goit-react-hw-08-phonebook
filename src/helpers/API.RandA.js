import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function postRegistartionUser(user) {
  const { data } = await axios.post('/users/signup/', user);
  return data;
}
