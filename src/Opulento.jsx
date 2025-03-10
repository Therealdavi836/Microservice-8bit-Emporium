import { Opulento } from "uvcanvas";
import React from "react";

export default function OpulentoComponente() {
  return (
    <div
      style={{
        position: "absolute", // Ahora solo afecta al contenedor padre
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Se mantiene detrás del contenido
      }}
    >
      <Opulento />
    </div>
  );
}
