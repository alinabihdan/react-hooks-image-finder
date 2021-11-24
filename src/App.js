import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Modal from './components/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = modalImage => {
    setShowModal(true);
    setModalImage(modalImage);
  };

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <div className="App">
      {showModal && (
        <Modal modalImage={modalImage} onClose={() => setShowModal(false)} />
      )}
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery query={query} onClick={openModal} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
