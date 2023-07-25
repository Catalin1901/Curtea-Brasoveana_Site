import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { SliderData } from '../data/SliderData';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10rem;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: ${({ visible }) => (visible ? 2 : 1)};
  opacity: ${({ visible }) => (visible ? 1 : 0.5)};
  transition: opacity 0.5s ease;
  background-image: ${({ visible, slide }) => (visible && slide ? `url(${slide.image})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  margin-top: 25rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  media (max-width: 800px) {
  text-shadow: 
  -0.5px -0.5px 0 black,
   0.5px -0.5px 0 black,
  -0.5px 0.5px 0 black,
   0.5px 0.5px 0 black;
  }
  color: #fff;
  h1 {
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Hero({ slides }) {
  const [current, setCurrent] = useState(0); 
  const length = slides.length;
  const timeout = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => { //functie pentru timeout
    const preLoadImages = () => {
      slides.forEach((slide) => {
        new Image().src = slide.image;
      });
    };

    preLoadImages();

    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000); // Adjust the timeout duration

    return function () { //functie pentru cleanup
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length, slides]);

  const nextSlide = () => { //functie pentru butonul de next
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent((current) => (current === length - 1 ? 0 : current + 1)); 
  };

  const prevSlide = () => { //functie pentru butonul de back`
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  const handleTouchStart = (e) => { //functie pentru touch
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; //sensibilitate touch
    if (touchStartX.current - touchEndX.current > swipeThreshold) { //daca miscarea e mai mare decat sensibilitatea
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index} visible={index === current}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    {/* <Button to={slide.path} primary="true" css={`max-width: 100px;`}>
                      {slide.label}
                      <Arrow />
                    </Button> */}
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
