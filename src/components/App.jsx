import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getContactsData } from 'redux/Phonebook.redux/operations';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';
import { RegistrationUser } from './RegistrForm/RegistrForm';
import { Phonebook } from './PhoneBoook/Phonebook';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/registration" element={<RegistrationUser />} />
          <Route path="/phonebook" element={<Phonebook />} />
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
};
