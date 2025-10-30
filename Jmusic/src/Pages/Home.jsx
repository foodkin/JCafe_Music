import { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const activities = [
    {
      id: 1,
      image: '/images/Weekly.webp',
      title: 'Weekly Karaoke',
      description: "Every Thursday and Friday, we'd get together and sing songs based on themes set beforehand, a challenging but fun time for our members."
    },
    {
      id: 2,
      image: '/images/showcase2.webp',
      title: 'Bonding J-Music',
      description: 'Regular bonding activities that bring our J-Music family closer together through games, discussions, and shared experiences.'
    },
    {
      id: 3,
      image: '/images/activity-3.webp',
      title: 'Bonding Inti',
      description: 'Special bonding activities for the entire Jcafe family to strengthen unity, teamwork, and shared spirit within the club.'
    },
    {
      id: 4,
      image: '/images/Final.webp',
      title: 'Final Project',
      description: 'A celebration of our members dedication and creativity throughout the semester, presented through MV covers and exciting collaborations.'
    }
  ];

  const youtubeVideos = [
    'oUxpK0WnOEU',
    'XK8IZhCfk_0'
  ];

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % youtubeVideos.length);
    }, 30000);

    return () => clearInterval(videoInterval);
  }, [youtubeVideos.length]);

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const goToActivity = (index) => {
    setCurrentActivity(index);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const goToYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${youtubeVideos[currentVideo]}`, '_blank');
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <section className="home-header">
        <img src="/images/showcase1.webp" alt="Header Background" className="home-header-img" />
        <div className="home-header-text">
          <p className="home-welcome">- Welcome to -</p>
          <h1 className="home-title">J-Music</h1>
        </div>
      </section>

      {/* About Us Section */}
      <section className="home-about">
        <h2 className="home-section-title">About Us</h2>
        <div className="home-about-content">
          <div className="home-about-logo">
            <img src="/images/jmusic-logo.webp" alt="J-Music Logo" />
          </div>
          <div className="home-about-description">
            <p>
              We are a Japanese Music Club that focuses on making covers and having fun! We're based in Gading Serpong as the music division of the Japanese club, JCAFE in UMN.
            </p>
            <p>
              Our club has been up and running ever since 2007!
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="home-activities">
        <h2 className="home-section-title">What We Do</h2>
        <div className="home-carousel">
          <div className="home-carousel-thumbnails">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`home-thumbnail ${index === currentActivity ? 'active' : ''}`}
                onClick={() => goToActivity(index)}
              >
                <img src={activity.image} alt={activity.title} />
              </div>
            ))}
          </div>
          <div className="home-carousel-content">
            <button className="home-carousel-btn prev" onClick={prevActivity}>
              ‹
            </button>
            <div className="home-carousel-main">
              <img src={activities[currentActivity].image} alt={activities[currentActivity].title} />
              <div className="home-carousel-description">
                <h3>{activities[currentActivity].title}</h3>
                <p>{activities[currentActivity].description}</p>
              </div>
            </div>
            <button className="home-carousel-btn next" onClick={nextActivity}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="home-youtube">
        <h2 className="home-section-title">YouTube</h2>
        <div className="home-youtube-container">
          <div className="home-youtube-player">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideos[currentVideo]}?autoplay=1&mute=${isMuted ? 1 : 0}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="home-youtube-controls">
            <button className="home-youtube-btn" onClick={toggleMute}>
              {isMuted ? '🔇 Unmute' : '🔊 Mute'}
            </button>
            <button className="home-youtube-btn" onClick={goToYouTube}>
              🎥 Watch on YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;