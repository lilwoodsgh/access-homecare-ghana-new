import Navbar from './Navbar';
import Footer from './Footer';
import ContactActions from './ContactActions';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ContactActions />
    </>
  );
}

export default Layout;
