import { NavLink } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { logoutOperation } from 'redux/Autorization/operation.R.A';

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <NavLink end to="/">
          <HiArrowCircleRight />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Autorithation</NavLink>
          </li>
          <li>
            <NavLink to="/phonebook">Phonebook</NavLink>
          </li>
        </ul>
        <button type="button" onClick={() => dispatch(logoutOperation())}>
          logout
        </button>
      </nav>
    </header>
  );
};
