import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Arte Francés - Armonizando imágenes </h1>
        <p>Puro relieve y profundidad</p>
        {children}
      </div>
    </div>
  );
}
