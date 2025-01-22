import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.css'; // استيراد ملف CSS

function CustomButton({ text, onClick }) {
  return (
    <BootstrapButton className="custom-button" onClick={onClick}>
      {text}
    </BootstrapButton>
  );
}

export default CustomButton;
