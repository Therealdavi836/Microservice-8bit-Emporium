import { Novatrix } from "uvcanvas";
import React from "react";

export default function NovatrixComponente() {
  return (
    <div
      style={{
        position: "fixed", // Ocupa toda la pantalla
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -9999, // Asegura que esté detrás de todo
      }}
    >
      <Novatrix />
    </div>
  );
}

