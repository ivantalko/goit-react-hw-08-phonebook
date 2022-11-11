import { NavLink } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import UserMenu from 'components/Page/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const Header = () => {
  const token = useSelector(state => state.registr.token);
  return (
    <header>
      <nav>
        <NavLink end to="/">
          <HiArrowCircleRight />
        </NavLink>
        <ul>
          {token ? (
            <>
              <li>
                <NavLink to="/phonebook">Phonebook</NavLink>
              </li>
              <li>
                <UserMenu />
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/registration">Registration</NavLink>
              </li>
              <li>
                <NavLink to="/login">Autorithation</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
