import React from 'react';
import './Button.css';

const Link = ({ text, onButtonClick, link }) => {
  return (
    <a href={link} onClick={onButtonClick} className="btn" target="_blank">
      {text}
    </a>
  );
};

export default Link;
