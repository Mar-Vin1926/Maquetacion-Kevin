import React from 'react';

function ColorBox({ color, children }) {
  return (
    <div className={`color-box ${color}`}>
      {children}
    </div>
  );
}

export default ColorBox;