import React, { useState, useEffect, useRef } from 'react';
import '../css/banner.css';
import banners from '../../../../data/layouts/banners';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (bannerRef.current) {
      const slideWidth = bannerRef.current.clientWidth;
      const gap = 10;
      bannerRef.current.style.transform = `translateX(-${
        currentIndex * (slideWidth + gap)
      }px)`;
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      <div className="banner">
        <div
          className="banner-list"
          style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
        >
          <div
            ref={bannerRef}
            className="banner-track"
            style={{
              display: 'flex',
              transition: 'transform 1.5s ease-in-out',
              gap: '10px',
            }}
          >
            {banners.map((banner) => (
              <div
                key={banner.id}
                className="slide"
                style={{ flex: '0 0 100%', width: '100%' }}
              >
                <a href={banner.link} title={banner.title}>
                  <picture className="banner-container">
                    <source
                      media="(max-width: 799px)"
                      srcSet={banner.mobileSrc}
                    />
                    <source
                      media="(min-width: 800px)"
                      srcSet={banner.desktopSrc}
                    />
                    <img
                      src={banner.desktopSrc}
                      alt={banner.title}
                      className="banner-img"
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div class="owl-nav">
          <button
            onClick={handlePrev}
            type="button"
            role="presentation"
            class="owl-prev"
            fdprocessedid="twibmo"
          >
            <img src="./images/icons/white-prev.png" alt="Previous" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            role="presentation"
            class="owl-next"
            fdprocessedid="rswx1j"
          >
            <img src="./images/icons/white-next.png" alt="Next" />
          </button>
        </div>
      </div>

      <div className="owl-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          >
            <span></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
