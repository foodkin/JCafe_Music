import React, { useState, useEffect, useRef } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/FinalGen14.css';

const FinalGen14 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const scrollPositionRef = useRef(0); // Store scroll position

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };



  const videos = [
    {
      id: 1,
      title: '【カレンダーガール/Calender Girl】Cover by 青春、8時で / Youth at 08 00 (Kelompok 1)',
      coverInfo: 'Covered by: Youth at 08:00',
      youtubeId: 'yOF4RnzJ-xQ',
      thumbnail: `https://img.youtube.com/vi/yOF4RnzJ-xQ/hqdefault.jpg`
    },
    {
      id: 2,
      title: '【Donut Hole】Cover by くるくる回る / Kuru-kuru Mawaru (Kelompok 2)',
      coverInfo: 'Covered by: Kurukurumawaru',
      youtubeId: 'LjRq5fm-DN8',
      thumbnail: `https://img.youtube.com/vi/LjRq5fm-DN8/hqdefault.jpg`
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
      title: '【海へ/Umi e】Cover by 801 (Kelompok 4)',
      coverInfo: 'Covered by: Happyaku-ichi',
      youtubeId: '8BJZXH88g0Q',
      thumbnail: `https://img.youtube.com/vi/8BJZXH88g0Q/hqdefault.jpg`
    },
    {
      id: 5,
      title: '【怪獣/ Kaijuu】Cover by Galileo Galilei (Kelompok 5)',
      coverInfo: 'Covered by: Galileo Galiei',
      youtubeId: 'jDZu9YCxWaI',
      thumbnail: `https://img.youtube.com/vi/jDZu9YCxWaI/hqdefault.jpg`
    },
    {
      id: 6,
      title: '【㋰責任集合体/Outlaws】Cover by 月のウサギ / Tsuki no Usagi (Kelompok 6)',
      coverInfo: 'Covered by: Tsuki No Usagi',
      youtubeId: 'jdI9JcsIsc4',
      thumbnail: `https://img.youtube.com/vi/jdI9JcsIsc4/hqdefault.jpg`
    },
    {
      id: 7,
      title: '【君に晴れ / Kimi ni Hare】Cover by 洋風カノン / Youfuu Kanon (Kelompok 7)',
      coverInfo: 'Covered by: Youfuu Kanon',
      youtubeId: 'eESqrfvO1E8',
      thumbnail: `https://img.youtube.com/vi/eESqrfvO1E8/hqdefault.jpg`
    },
    {
      id: 8,
      title: '【Shake & Shake】Cover by 美人探偵団 / Bijin Tanteidan (Kelompok 8)',
      coverInfo: 'Covered by: Bijin Tanteidan!!!',
      youtubeId: '8u9CdtkMD20',
      thumbnail: `https://img.youtube.com/vi/8u9CdtkMD20/hqdefault.jpg`
    },
    {
      id: 9,
      title: '【セカイ/Sekai】Cover by 色花 / Iro Hana (Kelompok 9)',
      coverInfo: 'Covered by: Irohana',
      youtubeId: 'Fys5TWnq3L8',
      thumbnail: `https://img.youtube.com/vi/Fys5TWnq3L8/hqdefault.jpg`
    },
    {
      id: 10,
      title: '【Bye Bye YESTERDAY】Cover by Tsukaretachi (Kelompok 10)',
      coverInfo: 'Covered by: Tsukaretachi',
      youtubeId: '6K19utQZtUE',
      thumbnail: `https://img.youtube.com/vi/6K19utQZtUE/hqdefault.jpg`
    },
    {
      id: 11,
      title: '【Angel With A Shotgun】JP Cover by 魔天撃/ Matengeki (BPH Gen 14)',
      coverInfo: 'Covered by: Sins & Virtue',
      youtubeId: 'XK8IZhCfk_0',
      thumbnail: `https://img.youtube.com/vi/XK8IZhCfk_0/hqdefault.jpg`
    }
  ];

  const openPopup = (video) => {
    // Store current scroll position
    scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    
    setSelectedVideo(video);
    setIsPopupOpen(true);
    
    // Prevent body scrolling without changing position
    document.body.classList.add('popup-open');
  };

  const closePopup = () => {
    setSelectedVideo(null);
    setIsPopupOpen(false);
    
    // Re-enable body scrolling
    document.body.classList.remove('popup-open');
    
    // Restore scroll position
    window.scrollTo(0, scrollPositionRef.current);
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

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      // Prevent scroll events
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Add event listeners to prevent scrolling
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('keydown', (e) => {
        // Prevent arrow keys, page up/down, space bar, home, end from scrolling
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          if (e.key !== 'Escape') { // Allow escape key to work
            e.preventDefault();
          }
        }
      });

      return () => {
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('keydown', preventScroll);
      };
    }
  }, [isPopupOpen]);

  return (
    <>
      {isLoading ? (
        <Gen14Loading onLoadingComplete={handleLoadingComplete} imageSrc="/images/Gen14Load.webp" />
      ) : (
        <>
          {/* Animated Background Layer */}
          <div className="finalgen14-background-layer"></div>

          {/* Welcome14 Section */}
          <section className="welcome14-section">
            <div className="welcome14-content">
              <div className="welcome14-box">
                <h1 className="hero14-subtitle" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                  - Final Project Of -
                </h1>
                <p className="hero14-title" style={{ fontFamily: 'Romaunt Gaolines', fontWeight: 300 }}>
                  Gen 14
                </p>
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
                  <h3 className="video-title">
                    {video.title}
                  </h3>
                  <p className="video-cover-info">
                    {video.coverInfo}
                  </p>
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