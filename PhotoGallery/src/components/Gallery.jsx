import React, { useState } from 'react';
import { images } from '../data/data';
import { useTheme } from '../context/ThemeContext';
import '../App.css';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="gallery-card shadow-sm rounded overflow-hidden">
              <img
                src={img.src}
                alt={img.caption}
                className="img-fluid gallery-img"
                onClick={() => openModal(index)}
                style={{ cursor: 'pointer' }}
              />
              <div className="p-2 text-center bg-light">
                <small className="text-muted">{img.caption}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Lightbox Modal */}
      {showModal && (
  <div className={`custom-modal ${theme}`}>
    <div className="custom-modal-content position-relative">
      {/* ✅ Close Button */}
      <button
        className="btn btn-light position-absolute top-0 end-0 m-3 fs-3 fw-bold"
        onClick={closeModal}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          padding: 0,
          lineHeight: '1',
        }}
      >
        &times;
      </button>

      <img src={images[currentIndex].src} alt="preview" className="modal-image" />
      <div className="caption text-center mt-3">
        <p>{images[currentIndex].caption}</p>
      </div>

      <div className="d-flex justify-content-between mt-4 w-100 px-4">
        <button className="btn btn-outline-dark" onClick={showPrev}>⟨ Prev</button>
        <button className="btn btn-outline-dark" onClick={showNext}>Next ⟩</button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Gallery;
