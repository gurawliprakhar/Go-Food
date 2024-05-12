import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(34,34,34)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const CLOSE_BUTTON_STYLE = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BUTTON_STYLE} onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  );
}
