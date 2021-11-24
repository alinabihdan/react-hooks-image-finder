import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ modalImage, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img alt={modalImage.tags} src={modalImage.largeImageURL} />
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
