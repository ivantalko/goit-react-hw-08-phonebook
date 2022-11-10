import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { RegistrationUser } from './ContactForm/Page/RegistrForm/RegistrForm';
import { Phonebook } from './ContactForm/Page/PhoneBoook/Phonebook';
import { Login } from './ContactForm/Page/Login/Login';
import PublicRouts from './PublickRoutse/PublickRoutse';
import PrivateRouts from './PrivatRouts/PrivatRouts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentOperation } from 'redux/Autorization/operation.R.A';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentOperation());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PublicRouts />}>
            <Route path="/registration" element={<RegistrationUser />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRouts />}>
            <Route path="/phonebook" element={<Phonebook />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
};
