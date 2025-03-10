const FooterBottom = () => {
    return (
      <div id="footer-bottom" className=" col-md-12 py-4 bg-dark text-light">
        <div className="container-fluid">
          <div className="row d-flex flex-wrap justify-content-between">
            {/* Envíos */}
            <div className="col-md-4 col-sm-6 d-flex flex-column align-items-center align-items-md-start">
              <div className="Shipping d-flex align-items-center">
                <p className="mb-0">Nuestros aliados para envíos:</p>
                <div className="card-wrap ps-2 d-flex">
                  <img src="/images/dhl.png" alt="DHL" className="me-2" width="50" />
                  <img src="/images/shippingcard.png" alt="Shipping" width="50" />
                </div>
              </div>
            </div>
            
            {/* Métodos de pago */}
            <div className="col-md-4 col-sm-6">
              <div className="payment-method d-flex align-items-center">
                <p className="mb-0">Métodos de pago válidos:</p>
                <div className="card-wrap ps-2 d-flex">
                  <img src="/images/visa.jpg" alt="Visa" className="me-2" width="50" />
                  <img src="/images/mastercard.jpg" alt="MasterCard" className="me-2" width="50" />
                  <img src="/images/paypal.jpg" alt="PayPal" width="50" />
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="col-md-4 col-sm-6 text-center text-md-start">
              <div className="copyright">
                <p className="mb-0">
                  © Copyright 2023 8-bit Emporium. Design by 
                  <a href="https://templatesjungle.com/" className="text-light"> TemplatesJungle</a> 
                  Distribution by <a href="https://themewagon.com" className="text-light">ThemeWagon</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterBottom;
  