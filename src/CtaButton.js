import React from 'react';

const CtaButton = ({ text, onClick }) => {
  return (
    <button className="cta-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default CtaButton;