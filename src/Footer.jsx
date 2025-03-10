import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-light py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-top-area w-100">
            <div className="row d-flex flex-wrap justify-content-between">
              {/* Logo y descripción */}
              <div className="col-md-6 col-lg-3 pb-3 text-center text-lg-start">
                <div className="footer-menu">
                  <img src="/images/main-logo.png" alt="Logo" className="img-fluid" />
                  <p className="mt-2">
                    Somos una tienda virtual comprometida con la satisfacción del cliente, cada día queremos aportar un granito al corazón de las personas.
                  </p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled justify-content-center justify-content-lg-start">
                      {['facebook', 'instagram', 'twitter', 'linkedin', 'youtube'].map((icon) => (
                        <li key={icon} className="me-2">
                          <a href="#" className="text-dark">
                            <svg className={icon} width="20" height="20">
                              <use xlinkHref={`#${icon}`} />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Links rápidos */}
              <div className="col-md-6 col-lg-2 pb-3 text-center text-lg-start">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Links rápidos</h5>
                  <ul className="menu-list list-unstyled">
                    {["Inicio", "Sobre nosotros", "Tienda", "Blogs", "Contacto"].map((link) => (
                      <li key={link} className="menu-item pb-2">
                        <Link to="#" className="text-dark">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Información y ayuda */}
              <div className="col-md-6 col-lg-3 pb-3 text-center text-lg-start">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Información y ayuda</h5>
                  <ul className="menu-list list-unstyled">
                    {["Rastrea tu pedido", "Políticas de devolución", "Envío y entrega", "Contáctanos", "PQRSF"].map((item) => (
                      <li key={item} className="menu-item pb-2">
                        <Link to="#" className="text-dark">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Contacto */}
              <div className="col-md-6 col-lg-3 pb-3 text-center text-lg-start">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contáctanos</h5>
                  <p className="m-0">
                    ¿Tienes alguna consulta o petición? Escríbenos:
                  </p>
                  <p className="small">
                    <a href="mailto:jfajardob@unal.edu.co" className="text-dark">jfajardob@unal.edu.co</a>
                    <br />
                    <a href="mailto:mcastanoal@unal.edu.co" className="text-dark">mcastanoal@unal.edu.co</a>
                    <br />
                    <a href="mailto:agallegoch@unal.edu.co" className="text-dark">agallegoch@unal.edu.co</a>
                  </p>
                  <p className="m-0">
                    <strong>Ayuda:</strong>
                  </p>
                  <p className="small">
                    <a href="tel:+573002223344" className="text-dark">+57 300 222 3344</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
    </footer>
  );
};

export default Footer;
