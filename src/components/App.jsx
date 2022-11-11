import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import PublicRouts from './PublickRoutse/PublickRoutse';
import PrivateRouts from './PrivatRouts/PrivatRouts';
import { currentOperation } from 'redux/Autorization/operation.R.A';
import HomePage from './Page/HomPage/HomePage';
const RegistrationUser = lazy(() => import('./Page/RegistrForm/RegistrForm'));
const Login = lazy(() => import('./Page/Login/Login'));
const Phonebook = lazy(() => import('./Page/PhoneBoook/Phonebook'));
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<PublicRouts />}>
              <Route path="/registration" element={<RegistrationUser />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateRouts />}>
              <Route path="/phonebook" element={<Phonebook />} />
            </Route>
          </Routes>
          <ToastContainer />
        </Suspense>
      </Layout>
    </>
  );
};
