import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button';
import fetchImages from '../../services/fetchImages';

function ImageGallery({ query, onClick }) {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const resetPage = () => {
    setPage(1);
  };

  const autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (query) {
      resetPage();
      setStatus('pending');
      fetchImages(query, 1)
        .then(images => {
          if (images.totalHits === 0) {
            throw new Error(`Nothing with name ${query} was not found`);
          }
          setImages([...images.hits]);
          setStatus('resolved');
          setPages(Math.ceil(images.totalHits / 12));
          autoScroll();
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      setStatus('more-pending');
      fetchImages(query, page)
        .then(images => {
          setImages(prevImages => [...prevImages, ...images.hits]);
          setStatus('resolved');
          autoScroll();
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [page, query]);

  if (status === 'idle') {
    return <h1>Please, enter something</h1>;
  }

  if (status === 'pending') {
    return <Loader type="TailSpin" color="#3f51b5" height={180} width={180} />;
  }

  if (status === 'more-pending') {
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem images={images} onClick={onClick} />
        </ul>
        <Loader type="TailSpin" color="#3f51b5" height={180} width={180} />
      </>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem images={images} onClick={onClick} />
        </ul>
        {pages > page ? (
          <Button onClick={() => setPage(prevPage => prevPage + 1)} />
        ) : (
          <></>
        )}
      </>
    );
  }

  if (status === 'rejected') {
    return <h2>{error.message}</h2>;
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
