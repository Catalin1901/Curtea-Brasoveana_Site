import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/gallery.css';

const GalleryComponent = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? galleryImages.length - 1 : slideNumber - 1);
  };

  const nextSlide = () => {
    setSlideNumber(slideNumber + 1 === galleryImages.length ? 0 : slideNumber + 1);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;

    if (touchDistance > 50) {
      prevSlide();
    } else if (touchDistance < -50) {
      nextSlide();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (openModal && !event.target.closest('.sliderContent')) {
        handleCloseModal();
      }
    };

    if (openModal) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openModal]);

  // Get the current window width
  const windowWidth = window.innerWidth;

  return (
    <div>
      {openModal && (
        <div
          className='sliderWrap'
          onTouchStart={windowWidth <= 800 ? null : handleTouchStart}
          onTouchEnd={windowWidth <= 800 ? null : handleTouchEnd}
        >
          <div className='sliderContent'>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='btnPrev'
              onClick={windowWidth <= 800 ? null : prevSlide}
            />
            <div className='fullScreenImage'>
              <img src={galleryImages[slideNumber].img} alt='' />
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='btnNext'
              onClick={windowWidth <= 800 ? null : nextSlide}
            />
          </div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='btnClose'
            onClick={handleCloseModal}
          />
        </div>
      )}

      <div className='galleryWrap'>
        {galleryImages.map((slide, index) => (
          <div
            className='single'
            key={index}
            onClick={windowWidth <= 800 ? null : () => handleOpenModal(index)}
          >
            <img src={slide.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
