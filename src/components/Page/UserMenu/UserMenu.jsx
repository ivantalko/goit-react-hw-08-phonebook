import { useDispatch, useSelector } from 'react-redux';
import { logoutOperation } from 'redux/Autorization/operation.R.A';

function UserMenu() {
  const email = useSelector(state => state.registr.user?.email);
  const dispatch = useDispatch();

  return (
    <>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logoutOperation())}>
        logout
      </button>
    </>
  );
}
export default UserMenu;
