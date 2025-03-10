import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPopup from "./SearchPopup";

const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <header className="site-header header-scrolled position-fixed text-black bg-light w-100">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src="/images/main-logo.png" alt="Logo" />
            </Link>

            {/* Íconos Usuario, Carrito y Búsqueda */}
            <div className="d-flex align-items-center">
              <ul className="navbar-nav d-flex flex-row align-items-center list-unstyled m-0">
                {user ? (
                  <>
                    <li className="nav-item me-3">
                      <Link to="/home" className="btn btn-primary text-white fw-semibold">
                        <i className="bi bi-person-circle" style={{ fontSize: "1.2rem" }}></i> {user.name}
                      </Link>
                    </li>
                    <li className="nav-item me-3">
                      <Link to="/cart">
                        <i className="bi bi-cart" style={{ fontSize: "1.4rem" }}></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button onClick={toggleSearch} className="btn p-0 border-0 bg-transparent">
                        <i className="bi bi-search" style={{ fontSize: "1.4rem" }}></i>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item me-3">
                      <Link to="/login">
                        <i className="bi bi-person" style={{ fontSize: "1.4rem" }}></i>
                      </Link>
                    </li>
                    <li className="nav-item me-3">
                      <Link to="/cart">
                        <i className="bi bi-cart" style={{ fontSize: "1.4rem" }}></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button onClick={toggleSearch} className="btn p-0 border-0 bg-transparent">
                        <i className="bi bi-search" style={{ fontSize: "1.4rem" }}></i>
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Botón menú móvil */}
            <button className="navbar-toggler d-flex d-lg-none p-2" type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menú de navegación */}
            <div className={`offcanvas offcanvas-end ${isMenuOpen ? "show" : ""}`}>
              <div className="offcanvas-header px-4 pb-0">
                <Link className="navbar-brand" to="/">
                  <img src="/images/main-logo.png" className="logo" alt="Logo" />
                </Link>
                <button type="button" className="btn-close btn-close-black" onClick={toggleMenu}></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-2">
                  <li className="nav-item"><Link className="nav-link me-2" to="#billboard">Inicio</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="#company-services">Productos</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="#mobile-products">PS5</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="#smart-watches">Nintendo Switch</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="#yearly-sale">Ofertas</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="#latest-blog">Próximamente</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="/explore">Explorar</Link></li>
                  <li className="nav-item"><Link className="nav-link me-2" to="/discover">Descubre</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Search Popup */}
      {isSearchOpen && <SearchPopup onClose={toggleSearch} />}
    </>
  );
};

export default Header;

