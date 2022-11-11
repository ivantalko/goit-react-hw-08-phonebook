import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRouts() {
  const token = useSelector(state => state.registr.token);

  return token ? <Navigate to="/phonebook" /> : <Outlet />;
}
