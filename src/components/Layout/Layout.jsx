import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './Layout.css';

function Layout() {
  return (
    <div className="contenedor-principal">
      <div className="caja-superior"></div>
      <div className="contenedor-inferior">
        <div className="columna-izquierda">
          <ColorBox color="azul" />
        </div>
        <div className="columna-derecha">
          <div className="fila-superior">
            <ColorBox color="azul" /> {/* Agregamos el rectángulo azul superior */}
          </div>
          <div className="fila-central">
            <ColorBox color="azul" />
            <ColorBox color="azul" />
          </div>
          <div className="fila-inferior">
            <ColorBox color="azul" />
            <ColorBox color="azul" />
            <ColorBox color="azul" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;