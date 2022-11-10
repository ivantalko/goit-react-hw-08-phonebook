import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { RegistrationUser } from './ContactForm/Page/RegistrForm/RegistrForm';
import { Phonebook } from './ContactForm/Page/PhoneBoook/Phonebook';
export const App = () => {
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
