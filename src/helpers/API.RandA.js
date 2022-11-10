import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function postRegistartionUser(user) {
  const { data } = await axios.post('/users/signup/', user);
  return data;
}
export async function login(body) {
  const { data } = await axios.post('/users/login/', body);
  return data;
}
export async function logout() {
  const { data } = await axios.post('/users/logout/');
  return data;
}
export async function current() {
  const { data } = await axios.get('/users/current/');
  return data;
}
