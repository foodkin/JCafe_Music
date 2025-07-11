import React, { useState, useEffect, useRef } from 'react';
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
            <div className="slide-content" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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

const YouTubePlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videos = [
    { id: "oUxpK0WnOEU", title: "【オトノナルホウへ→ // Oto no naru hou e→】 Cover by Nijisetsu (BPH Gen 13)" },
    { id: "H08xfaJnYrQ", title: "BPH Gen 14" },
  ];

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('youtube-player', {
        height: '500',
        width: '100%',
        videoId: videos[currentVideoIndex].id,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          disablekb: 0,
          fs: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1
        },
        events: {
          onReady: (event) => {
            setIsPlayerReady(true);
            setIsLoading(false);
            playerRef.current = event.target;
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
            }
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady && playerRef.current) {
      setIsLoading(true);
      playerRef.current.loadVideoById(videos[currentVideoIndex].id);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [currentVideoIndex, isPlayerReady]);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="youtube-showcase-container">
      <div className={`youtube-main-player ${isLoading ? 'loading' : 'loaded'}`}>
        <div id="youtube-player"></div>

        {/* Mute/Unmute Button */}
        <button 
          onClick={toggleMute}
          className="mute-button"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>

        {/* Title Overlay */}
        <div className="video-overlay">
          <div className="video-info">
            <h4 className="video-title">{videos[currentVideoIndex].title}</h4>
          </div>
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              <h1 className="hero-subtitle" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                - Welcome to -
              </h1>
              <p className="hero-title" style={{ fontFamily: 'Romaunt Gaolines', fontWeight: 300 }}>
                J-Music
              </p>
            </div>
          </div>
        </section>

        <div className="arrow-navigation">
          <button onClick={() => setActiveImageIndex((activeImageIndex - 1 + showcaseImages.length) % showcaseImages.length)}>◀</button>
          <span>{activeImageIndex + 1} / {showcaseImages.length}</span>
          <button onClick={() => setActiveImageIndex((activeImageIndex + 1) % showcaseImages.length)}>▶</button>
        </div>
      </section>

      <div className="content-box" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <section className="jmusic-intro-section">
          <div className="jmusic-intro-content">
            <div className="jmusic-intro-image">
              <img src="/images/jmusic-logo.png" alt="J-Music Community" className="jmusic-intro-img" />
            </div>
            <div className="jmusic-intro-description">
              <h3 className="jmusic-intro-title">ABOUT US</h3>
              <p className="jmusic-intro-text">
                We are a Japanese Music Club that focuses on making covers and having fun! We're based
                in Gading Serpong as the music division of the Japanese club, JCAFE in UMN.
              </p>
              <p className="jmusic-intro-text">Our club has been up and running ever since 2007!</p>
            </div>
          </div>
        </section>
      </div>

      <div className="content-box" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <section className="what-we-do-section">
          <h2 className="what-we-do-title">WHAT WE DO</h2>
          <WhatWeDoSlider />
        </section>
      </div>

      <div className="youtube-section-container" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <section className="youtube-section">
          <h2 className="youtube-section-title">YOUTUBE</h2>
          <YouTubePlayer />
        </section>
      </div>
    </div>
  );
};

export default Home;