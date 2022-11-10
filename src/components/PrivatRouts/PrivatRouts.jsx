import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/Autorization/auth-selector';

export default function PrivateRouts() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
