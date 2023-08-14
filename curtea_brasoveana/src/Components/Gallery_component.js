import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/gallery.css';

const Gallery_component = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

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

  return (
    <div>
      {openModal && (
        <div className='sliderWrap'>
          <div className='sliderContent'>
            <FontAwesomeIcon icon={faChevronLeft}  className='btnPrev' onClick={prevSlide}   />
            <div className='fullScreenImage'>
              <img src={galleryImages[slideNumber].img} alt='' />
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='btnNext'
              onClick={nextSlide}
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
            onClick={() => handleOpenModal(index)}
          >
            <img src={slide.img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery_component;
