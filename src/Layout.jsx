import Header from "./Header";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import NovatrixComponente from "./Novatrix";
import VideogameTable from "./VideogameTable";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <NovatrixComponente />
      <main>{children}</main>
      <VideogameTable />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Layout;

