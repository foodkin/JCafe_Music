import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './Home.css';

const WhatWeDoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activities = useMemo(() => [
    {
      id: 1,
      title: "WEEKLY KARAOKE",
      subtitle: "Our weekly scheduled karaoke session!",
      description: "Every Thursday and Friday, we'd get together and sing songs based on themes set beforehand, a challenging but fun time for our members.",
      image: "/images/Weekly.webp"
    },
    {
      id: 2,
      title: "BONDING J-MUSIC",
      subtitle: "Building stronger connections within our community!",
      description: "Regular bonding activities that bring our J-Music family closer together through games, discussions, and shared experiences.",
      image: "/images/showcase2.webp"
    },
    {
      id: 3,
      title: "BONDING INTI",
      subtitle: "Core team bonding sessions!",
      description: "Special bonding activities for the entire Jcafe family to strengthen unity, teamwork, and shared spirit within the club.",
      image: "/images/bonding-inti.webp"
    },
    {
      id: 4,
      title: "FINAL PROJECT",
      subtitle: "Our culminating showcase event!",
      description: "A celebration of our members' dedication and creativity throughout the semester, presented through MV covers and exciting collaborations.",
      image: "/images/Final.webp"
    }
  ], []);

  const currentActivity = useMemo(() => activities[currentSlide], [activities, currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  }, [activities.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  }, [activities.length]);

  const montserratStyle = useMemo(() => ({
    fontFamily: "'Montserrat', sans-serif"
  }), []);

  return (
    <div className="what-we-do-slider">
      <div className="slider-container">
        <div className="slide-wrapper">
          <div className="slide-image">
            <img src={currentActivity.image} alt={currentActivity.title} />
          </div>
          <div className="slide-overlay">
            <div className="slide-content" style={montserratStyle}>
              <h3 className="slide-title">{currentActivity.title}</h3>
              <p className="slide-subtitle">{currentActivity.subtitle}</p>
              <p className="slide-description">{currentActivity.description}</p>
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
  const [showTitle, setShowTitle] = useState(true);

  const videos = useMemo(() => [
    { id: "oUxpK0WnOEU", title: "【オトノナルホウへ→ // Oto no naru hou e→】 Cover by Nijisetsu (BPH Gen 13)" },
    { id: "H08xfaJnYrQ", title: "BPH Gen 14" },
  ], []);

  const channelUrl = useMemo(() => "https://youtube.com/@jcafemusic?si=tkCJbhX4HPMftVJm", []);

  const currentVideo = useMemo(() => videos[currentVideoIndex], [videos, currentVideoIndex]);

  const handleVideoEnd = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const handlePlayerReady = useCallback((event) => {
    setIsPlayerReady(true);
    setIsLoading(false);
    playerRef.current = event.target;
  }, []);

  const toggleMute = useCallback(() => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  }, [isMuted]);

  const handleChannelClick = useCallback(() => {
    window.open(channelUrl, '_blank', 'noopener,noreferrer');
  }, [channelUrl]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      handleChannelClick();
    }
  }, [handleChannelClick]);

  const handleMuteClick = useCallback((e) => {
    e.stopPropagation();
    toggleMute();
  }, [toggleMute]);

  const handleChannelButtonClick = useCallback((e) => {
    e.stopPropagation();
    handleChannelClick();
  }, [handleChannelClick]);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('youtube-player', {
        height: '500',
        width: '100%',
        videoId: currentVideo.id,
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
          onReady: handlePlayerReady,
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              handleVideoEnd();
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
      playerRef.current.loadVideoById(currentVideo.id);
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [currentVideoIndex, isPlayerReady, currentVideo.id]);

  useEffect(() => {
    setShowTitle(true);
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <div className="youtube-showcase-container">
      <div 
        className={`youtube-main-player ${isLoading ? 'loading' : 'loaded'}`}
        role="button"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        aria-label="Click to visit J-Music YouTube channel"
      >
        <div id="youtube-player"></div>

        {/* Mute/Unmute Button */}
        <button 
          onClick={handleMuteClick}
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

        {/* Channel Link Button */}
        <button 
          onClick={handleChannelButtonClick}
          className="channel-button"
          aria-label="Visit J-Music YouTube channel"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </button>

        {/* Title Overlay */}
        {showTitle && (
          <div className="video-overlay">
            <div className="video-info">
              <h4 className="video-title">{currentVideo.title}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showcaseImages = useMemo(() => [
    { src: 'images/showcase1.webp', title: 'Gen 13 Bonding' },
    { src: 'images/showcase2.webp', title: 'Gen 14 Bonding' },
    { src: 'images/showcase3.webp', title: 'Istri Bendahara Gen 14' },
    { src: 'images/showcase4.webp', title: 'Istri Bendahara Gen 14' }
  ], []);

  const currentShowcaseImage = useMemo(() => showcaseImages[activeImageIndex], [showcaseImages, activeImageIndex]);

  const montserratStyle = useMemo(() => ({
    fontFamily: "'Montserrat', sans-serif"
  }), []);

  const romauntStyle = useMemo(() => ({
    fontFamily: 'Romaunt Gaolines',
    fontWeight: 300
  }), []);

  const welcomeSubtitleStyle = useMemo(() => ({
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300
  }), []);

  const handlePrevImage = useCallback(() => {
    setActiveImageIndex((activeImageIndex - 1 + showcaseImages.length) % showcaseImages.length);
  }, [activeImageIndex, showcaseImages.length]);

  const handleNextImage = useCallback(() => {
    setActiveImageIndex((activeImageIndex + 1) % showcaseImages.length);
  }, [activeImageIndex, showcaseImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [showcaseImages.length]);

  return (
    <div className="home-container">
      <section className="hero-image-section">
        <img
          src={currentShowcaseImage.src}
          alt={currentShowcaseImage.title}
          className="hero-main-image"
        />

        <section className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-box">
              <h1 className="hero-subtitle" style={welcomeSubtitleStyle}>
                - Welcome to -
              </h1>
              <p className="hero-title" style={romauntStyle}>
                J-Music
              </p>
            </div>
          </div>
        </section>

        <div className="arrow-navigation">
          <button onClick={handlePrevImage}>◀</button>
          <span>{activeImageIndex + 1} / {showcaseImages.length}</span>
          <button onClick={handleNextImage}>▶</button>
        </div>
      </section>

      <div className="content-box" style={montserratStyle}>
        <section className="jmusic-intro-section">
          <div className="jmusic-intro-content">
            <div className="jmusic-intro-image">
              <img src="/images/jmusic-logo.webp" alt="J-Music Community" className="jmusic-intro-img" />
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

      <div className="content-box" style={montserratStyle}>
        <section className="what-we-do-section">
          <h2 className="what-we-do-title">WHAT WE DO</h2>
          <WhatWeDoSlider />
        </section>
      </div>

      <div className="youtube-section-container" style={montserratStyle}>
        <section className="youtube-section">
          <h2 className="youtube-section-title">YOUTUBE</h2>
          <YouTubePlayer />
        </section>
      </div>
    </div>
  );
};

export default Home;