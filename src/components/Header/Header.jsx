import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"></NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink>Autorithation</NavLink>
          </li>
          <li>
            <NavLink to="/phonebook">Phonebook</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
