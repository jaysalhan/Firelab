import { Container } from 'react-bootstrap';
import Header from '../header/header';
import Footer from '../footer/footer';

function MainLayout({ children, className = '', style = {} }) {
  return (
    <>
      <Header />
      <section className={`main-container text-center mt-4 ${className}`} style={{ paddingTop: '55px', ...style }}>
        {children}
      </section>
      <Footer />
    </>
  );
}

export default MainLayout;