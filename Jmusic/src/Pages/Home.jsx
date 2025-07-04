import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showcaseImages = [
    { src: 'images/showcase1.jpg', title: 'Gen 13 Bonding' },
    { src: 'images/showcase2.jpg', title: 'Gen 14 Bonding' },
    { src: 'images/showcase3.jpg', title: 'Istri Bendahara Gen 14' },
    { src: 'images/showcase4.jpg', title: 'Istri Bendahara Gen 14' }
  ];

  // Auto-change image every 5 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(imageTimer);
  }, [showcaseImages.length]);

  const handlePrevious = () => {
    setActiveImageIndex((activeImageIndex - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const handleNext = () => {
    setActiveImageIndex((activeImageIndex + 1) % showcaseImages.length);
  };

  return (
    <div className="home-container">
      <section className="hero-image-section">
        <img
          src={showcaseImages[activeImageIndex].src}
          alt={showcaseImages[activeImageIndex].title}
          className="hero-main-image"
        />

        <section className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-box">
            <h1 className="hero-subtitle">- Welcome to -</h1>
            <p className="hero-title">J-Music</p>
            </div>
          </div>
        </section>

        <div className="thumbnail-strip">
          {showcaseImages.map((img, index) => (
            <div
              key={index}
              className={`thumb-wrapper ${index === activeImageIndex ? 'active' : ''}`}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={img.src} alt={img.title} className="thumbnail-image" />
              <div className="thumb-title">{img.title}</div>
            </div>
          ))}
        </div>

        <div className="arrow-navigation">
          <button onClick={handlePrevious} aria-label="Previous image">
            ◀
          </button>
          <span>{activeImageIndex + 1} / {showcaseImages.length}</span>
          <button onClick={handleNext} aria-label="Next image">
            ▶
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;