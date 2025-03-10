import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeadMeta from "./HeadMeta";
import Layout from "./Layout";
import NovatrixComponente from "./Novatrix";
import OpulentoComponente from "./Opulento";

const Home = () => (
  <div>
    <h1 style={{ fontFamily: "'Press Start 2P', cursive" }}>Bienvenido a 8-bit Emporium</h1>
    <p style={{ fontFamily: "'Press Start 2P', cursive" }}>Explora nuestra tienda de videojuegos.</p>
  </div>
);

function App() {
  return (
    <>
      <HeadMeta />
      <Router>
        <NovatrixComponente /> {/* Fondo animado principal */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Layout style={{ overflow: "hidden" }}> {/* Evita que los textos se vean fuera */}
            {/* Contenedor de bienvenida con OpulentoComponente dentro */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                textAlign: "center",
                color: "#00ccff",
                textShadow: "4px 4px 0px #0033cc, 8px 8px 0px rgb(255, 255, 255)",
                padding: "20px",
                fontFamily: "'VT323', monospace",
                fontSize: "22px",
                position: "relative",
                overflow: "hidden",
                paddingTop: "100px",
              }}
            >
              {/* Fondo animado dentro del div, sin afectar el layout completo */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1,
                }}
              >
                <OpulentoComponente />
              </div>

              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textShadow: "4px 4px 0px #0033cc",
                  zIndex: -1, // Hace que el texto se oculte detrás
                  position: "relative",
                }}
              >
                Bienvenido a 8-bit Emporium
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  textShadow: "2px 2px 0px #0033cc",
                  zIndex: -1,
                  position: "relative",
                }}
              >
                Explora nuestra tienda de videojuegos.
              </p>
              <p
                style={{
                  fontSize: "1.2rem",
                  textShadow: "2px 2px 0px #0033cc",
                  zIndex: -1,
                  position: "relative",
                }}
              >
                ¿Quieres crear tu videojuego ideal? ¡Agrégalo en nuestra tabla de registros!
              </p>
            </div>
          </Layout>
        </div>

      </Router>
    </>
  );
}

export default App;
