const SearchPopup = () => {
    return (
      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="search-form" action="">
            <input
              type="search"
              id="search-form"
              className="search-field"
              placeholder="Escriba y presione enter"
              name="s"
            />
            <button type="submit" className="search-submit">
              <svg className="search">
                <use xlinkHref="#search"></use>
              </svg>
            </button>
          </form>
  
          <h5 className="cat-list-title">Buscar Categorías o productos</h5>
  
          <ul className="cat-list d-flex flex-wrap justify-content-center align-items-center gap-3 p-0 list-unstyled">
            {[
              { title: "Videojuegos", href: "#" },
              { title: "Playstation 4", href: "#" },
              { title: "Playstation 5", href: "#" },
              { title: "Tarjetas de recarga", href: "#" },
              { title: "Xbox Series X/S", href: "#" },
              { title: "Promociones", href: "#" },
              { title: "Lanzamientos", href: "#" },
              { title: "Categorías", href: "#" }
            ].map((item, index) => (
              <li key={index} className="cat-list-item">
                <a href={item.href} title={item.title} className="text-decoration-none text-dark px-3 py-2 d-block text-center">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    );
  };
  
  export default SearchPopup;
  