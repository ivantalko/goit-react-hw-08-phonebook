import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/Autorization/auth-selector';

export default function PublicRouts() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/products" /> : <Outlet />;
}
