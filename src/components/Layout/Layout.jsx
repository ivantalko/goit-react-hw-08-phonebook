import Footer from 'components/ContactForm/Footer/Footer';
import { Header } from 'components/Header/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
