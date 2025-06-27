import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const youtubeVideos = [
    'oUxpK0WnOEU&ab',
    'H08xfaJnYrQ&ab'
  ];

  const showcaseImages = [
    { src: 'images/showcase1.jpg', title: 'Gen 13 Bonding' },
    { src: 'images/showcase2.jpg', title: 'Gen 14 Bonding' },
    { src: 'images/showcase3.jpg', title: 'Istri Bendahara Gen 14' },
    { src: 'images/showcase4.jpg', title: 'Istri Bendahara Gen 14' }
  ];

  // Video berganti otomatis setiap 10 detik
  useEffect(() => {
    const videoTimer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % youtubeVideos.length);
        setIsTransitioning(false);
      }, 500);
    }, 10000);
    return () => clearInterval(videoTimer);
  }, [youtubeVideos.length]);

  // Gambar berganti otomatis setiap 5 detik
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(imageTimer);
  }, [showcaseImages.length]);

  return (
    <div className="home-container">
      {/* Video Section */}
      <section className="hero-section">
        <div className={`video-container ${isTransitioning ? 'transitioning' : ''}`}>
          <iframe
            className="video-background"
            src={`https://www.youtube.com/embed/${youtubeVideos[currentVideoIndex]}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideos[currentVideoIndex]}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Tambahan efek blur */}
        <div className="video-blur-overlay"></div>

        {/* Overlay gradasi dan bayangan */}
        <div className="hero-overlay"></div>
      </section>

      {/* Gambar Showcase Section */}
      <section className="hero-image-section">
        <img
          src={showcaseImages[activeImageIndex].src}
          alt={showcaseImages[activeImageIndex].title}
          className="hero-main-image"
        />

        {/* Thumbnail Strip */}
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

        {/* Panah Navigasi di bawah gambar kecil paling kiri */}
        <div className="arrow-navigation">
          <button
            onClick={() =>
              setActiveImageIndex(
                (activeImageIndex - 1 + showcaseImages.length) % showcaseImages.length
              )
            }
          >
            ◀
          </button>
          <span>{activeImageIndex + 1} / {showcaseImages.length}</span>
          <button
            onClick={() =>
              setActiveImageIndex((activeImageIndex + 1) % showcaseImages.length)
            }
          >
            ▶
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1 className="hero-title">Welcome to J Cafe Music</h1>
          <p className="hero-subtitle">Experience the perfect blend of music and atmosphere</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
