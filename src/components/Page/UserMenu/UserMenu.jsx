import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from 'redux/Autorization/operation.R.A';

function UserMenu() {
  const name = useSelector(state => state.registr.user?.name);
  const email = useSelector(state => state.registr.user?.email);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        <li>
          <p>Hello {name}</p>
          <p>{email}</p>
          <button type="button" onClick={() => dispatch(logoutOperation())}>
            logout
          </button>
        </li>
      </ul>
    </>
  );
}
export default UserMenu;
