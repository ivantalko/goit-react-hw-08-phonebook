import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { registrUser } from 'redux/Autorization/operation.R.A';

export const RegistrationUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const dispatch = useDispatch();

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
    repPassword: setRepPassword,
  };
  const handleInput = evt => {
    inputs[evt.target.name](evt.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    if (password === repPassword) {
      const userInfo = {
        name,
        email,
        password,
      };
      dispatch(registrUser(userInfo));
    } else {
      toast.warn('Упс, паролі не збігаються');
    }
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
      <form onSubmit={handleFormSubmit}>
        <label>
          name
          <input
            required
            onChange={handleInput}
            name="name"
            value={name}
            type="text"
            placeholder="sponche-bob"
          />
        </label>
        <label>
          email
          <input
            required
            onChange={handleInput}
            name="email"
            value={email}
            type="email"
            placeholder="email@gmail.com"
          />
        </label>
        <label>
          pasword
          <input
            required
            onChange={handleInput}
            name="password"
            value={password}
            type="password"
          />
        </label>
        <label>
          Confim pasword
          <input
            required
            onChange={handleInput}
            name="repPassword"
            value={repPassword}
            type="password"
          />
        </label>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
};
