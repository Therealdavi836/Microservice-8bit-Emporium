import { Helmet, HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

const HeadMeta = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>8-bit Emporium</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Lato:wght@300;400;700&display=swap"
        />
      </Helmet>
    </HelmetProvider>
  );
};

export default HeadMeta;

