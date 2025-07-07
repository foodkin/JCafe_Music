import React, { useState, useEffect } from 'react';
import './Home.css';

const WhatWeDoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = [
    {
      id: 1,
      title: "WEEKLY KARAOKE",
      subtitle: "Our weekly scheduled karaoke session!",
      description: "Every Thursday and Friday, we'd get together and sing songs based on themes set beforehand, a challenging but fun time for our members.",
      image: "/images/showcase1.jpg"
    },
    {
      id: 2,
      title: "BONDING J-MUSIC",
      subtitle: "Building stronger connections within our community!",
      description: "Regular bonding activities that bring our J-Music family closer together through games, discussions, and shared experiences.",
      image: "/images/showcase2.jpg"
    },
    {
      id: 3,
      title: "BONDING INTI",
      subtitle: "Core team bonding sessions!",
      description: "Special bonding activities for our core team members to strengthen leadership and coordination within the club.",
      image: "/images/bonding-inti.jpg"
    },
    {
      id: 4,
      title: "FINAL PROJECT",
      subtitle: "Our culminating showcase event!",
      description: "The ultimate showcase of our talents and hard work throughout the semester, featuring performances and collaborations.",
      image: "/images/final-project.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="what-we-do-slider">
      <div className="slider-container">
        <div className="slide-wrapper">
          <div className="slide-image">
            <img src={activities[currentSlide].image} alt={activities[currentSlide].title} />
          </div>

          <div className="slide-overlay">            
            <div className="slide-content">
              <h3 className="slide-title">{activities[currentSlide].title}</h3>
              <p className="slide-subtitle">{activities[currentSlide].subtitle}</p>
              <p className="slide-description">{activities[currentSlide].description}</p>
            </div>
          </div>

          <button className="nav-arrow next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          <button className="nav-arrow prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

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
      {/* Hero Section - tidak perlu kotak */}
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

      {/* About Us Section - dalam kotak */}
      <div className="content-box">
        <section className="jmusic-intro-section">
          <div className="jmusic-intro-content">
            <div className="jmusic-intro-image">
              <img src="/images/jmusic-logo.png" alt="J-Music Community" className="jmusic-intro-img" />
            </div>
            <div className="jmusic-intro-description">
              <h3 className="jmusic-intro-title">ABOUT US</h3>
              <p className="jmusic-intro-text">We are a Japanese Music Club that focuses on making covers and having fun! We're based in Gading Serpong as the music division of the Japanese club, JCAFE in UMN. </p>
              <p className="jmusic-intro-text"> Our club has been up and running ever since 2007!</p>
            </div>
          </div>
        </section>
      </div>

      {/* What We Do Section - dalam kotak */}
      <div className="content-box">
        <section className="what-we-do-section">
          <h2 className="what-we-do-title">WHAT WE DO</h2>
          <WhatWeDoSlider />
        </section>
      </div>
    </div>
  );
};

export default Home;