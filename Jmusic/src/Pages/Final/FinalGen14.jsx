import React, { useState, useEffect } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/FinalGen14.css';

const FinalGen14 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const videos = [
    {
      id: 1,
      title: 'Judul',
      coverInfo: 'Covered by: Youth at 08:00',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 2,
      title: 'Judul',
      coverInfo: 'Covered by: Kurukurumawaru',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 3,
      title: 'Judul',
      coverInfo: 'Covered by: Yottsuhanabi',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 4,
      title: 'Judul',
      coverInfo: 'Covered by: Happyaku-ichi',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 5,
      title: 'Judul',
      coverInfo: 'Covered by: Galileo Galiei',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 6,
      title: 'Judul',
      coverInfo: 'Covered by: Tsuki No Usagi',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 7,
      title: 'Judul',
      coverInfo: 'Covered by: Youfuu Kanon',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 8,
      title: 'Judul',
      coverInfo: 'Covered by: Bijin Tanteidan!!!',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 9,
      title: 'Judul',
      coverInfo: 'Covered by: Irohana',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 10,
      title: 'Judul',
      coverInfo: 'Covered by: Tsukaretachi',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    },
    {
      id: 11,
      title: 'Judul',
      coverInfo: 'Covered by: Sins & Virtue',
      youtubeId: 'MzEFeIRJ0eQ',
      thumbnail: `https://img.youtube.com/vi/MzEFeIRJ0eQ/hqdefault.jpg`
    }
  ];

  const openPopup = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
    // Prevent body scrolling
    document.body.classList.add('popup-open');
  };

  const closePopup = () => {
    setSelectedVideo(null);
    setIsPopupOpen(false);
    // Re-enable body scrolling
    document.body.classList.remove('popup-open');
  };

  // Cleanup effect to remove class if component unmounts while popup is open
  useEffect(() => {
    return () => {
      document.body.classList.remove('popup-open');
    };
  }, []);

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isPopupOpen) {
        closePopup();
      }
    };

    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isPopupOpen]);

  return (
    <>
      {isLoading ? (
        <Gen14Loading onLoadingComplete={handleLoadingComplete} imageSrc="/images/Gen14Load.jpg" />
      ) : (
        <>
          {/* Animated Background Layer */}
          <div className="finalgen14-background-layer"></div>

          {/* Welcome Section */}
          <section className="welcome-section">
            <div className="welcome-content">
              <div className="welcome-box">
                <h1 className="hero-subtitle" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                  - Final Project Of -
                </h1>
                <p className="hero-title" style={{ fontFamily: 'Romaunt Gaolines', fontWeight: 300 }}>
                  Gen 14
                </p>
                <div className="gen14-intro-image">
                  <img src="/images/jmusic-logo14.png" alt="J Cafe Music Gen 14" className="gen14-intro-img" />
                </div>
              </div>
            </div>
          </section>

          <div className="finalgen14-container">
            <div className="video-grid">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="video-card"
                  onClick={() => openPopup(video)}
                >
                  {/* Thumbnail moved to top */}
                  <div className="thumbnail-container">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="thumbnail"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="play-overlay">
                      <div className="play-icon">▶</div>
                    </div>
                  </div>
                  
                  {/* Divider after thumbnail */}
                  <hr className="video-divider" />
                  
                  {/* Title and cover info below thumbnail */}
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-cover-info">{video.coverInfo}</p>
                </div>
              ))}
            </div>

            {isPopupOpen && selectedVideo && (
              <div className="video-popup-overlay" onClick={closePopup}>
                <div className="video-popup" onClick={(e) => e.stopPropagation()}>
                  <button className="close-button" onClick={closePopup}>
                    <span className="close-icon">×</span>
                  </button>
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="popup-video-info">
                    <h3>{selectedVideo.title}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FinalGen14;