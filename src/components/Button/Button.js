import React from 'react';
import './Button.css';

const Button = ({ text, onButtonClick }) => {
  return (
    <button onClick={onButtonClick} className="btn">
      {text}
    </button>
  );
};

export default Button;
