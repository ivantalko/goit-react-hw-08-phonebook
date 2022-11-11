import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/Autorization/operation.R.A';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginOperation({ email, password }));
  };

  const handleChange = event => {
    if (event.target.id === 'email') {
      setEmail(event.target.value);
    } else setPassword(event.target.value);
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" id="email" value={email} />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          value={password}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
export default Login;
