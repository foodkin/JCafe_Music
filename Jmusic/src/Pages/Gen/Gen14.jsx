// Gen14.jsx
import { useRef, useState } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/Gen14.css';

function Gen14() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const characterList = [
    { id: 0, name: 'Bathory', role: 'Leader', roleColor: '#FFD700', desc: 'Ketua Jmusic.', img: '/images/14Char/Nadine.jpg' },
    { id: 1, name: 'Sai', role: 'Vice Leader', roleColor: '#00CED1', desc: 'Wakil Ketua Jmusic.', img: '/images/14Char/Sebastian.jpg' },
    { id: 2, name: 'Yuzu', role: 'Secretary', roleColor: '#000000', desc: 'Sekretaris Jmusic.', img: '/images/14Char/Wishley.jpg' },
    { id: 3, name: 'Ren Mixe', role: 'Treasurer', roleColor: '#5D3A9B', desc: 'Holder of Greed and Patience, he serves as Jmusic Gen14’s treasurer. Calm, calculating, and fiercely protective of every coin. Behind his quiet demeanor lies a sharp strategist who balances ambition with discipline.', img: '/images/14Char/Jeferson.jpg' },
    { id: 4, name: 'Chess', role: 'Documentation', roleColor: '#20B2AA', desc: 'Dokumentasi Jmusic.', img: '/images/14Char/Lucky.jpg' },
    { id: 5, name: 'Sakura Inari', role: 'Publication', roleColor: '#FF69B4', desc: 'Publikasi Jmusic.', img: '/images/14Char/Sephine.jpg' },
    { id: 6, name: 'Moppo', role: 'Logistic', roleColor: '#FFA500', desc: 'Perlengkapan Jmusic.', img: '/images/14Char/Gwendy.jpg' },
    { id: 7, name: 'Gabi', role: 'Angle', roleColor: '#87CEFA', desc: 'Malaikat Jmusic.', img: '/images/14Char/Gabi.jpg' },
    { id: 8, name: 'Pito', role: 'Demon', roleColor: '#FF4500', desc: 'Iblis Jmusic.', img: '/images/14Char/Pito.jpg' },
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setActiveIndex(prev => prev === 0 ? characterList.length - 1 : prev - 1);
    } else {
      setActiveIndex(prev => prev === characterList.length - 1 ? 0 : prev + 1);
    }
  };

  const getVisibleCharacters = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = activeIndex + i;
      if (index < 0) index = characterList.length - 1;
      if (index >= characterList.length) index = 0;
      visible.push({ ...characterList[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <>
      <div className="gen14-background-layer"></div>

      {isLoading ? (
        <Gen14Loading
          onLoadingComplete={handleLoadingComplete}
          imageSrc="/images/Gen14Load.jpg"
        />
      ) : (
        <div className="gen14-content fade-in">
          <div className="gen14-welcome-section">
            <h1 className="gen14-welcome-title">Sins & Virtue🎶</h1>
            <p className="gen14-subtitle">J Cafe Music Gen 14</p>
          </div>

          {/* Gen14 Introduction Section */}
          <div className="gen14-intro-section">
            <div className="gen14-intro-content">
              <div className="gen14-intro-image">
                <img src="/images/jmusic-logo14.png" alt="J Cafe Music Gen 14" className="gen14-intro-img" />
              </div>
              <div className="gen14-intro-description">
                <h3 className="gen14-intro-title">Welcome to Gen 14</h3>
                <p className="gen14-intro-text">
                  Selamat datang di J Cafe Music Generation 14! Kami adalah komunitas musik yang terdiri dari 9 anggota unik, 
                  masing-masing dengan karakter dan peran yang berbeda. Dari para pemimpin hingga malaikat dan iblis, 
                  setiap anggota membawa keunikan tersendiri dalam harmoni musik kami.
                </p>
                <p className="gen14-intro-text">
                  Bergabunglah dengan kami dalam perjalanan musik yang penuh dengan sins dan virtue, 
                  di mana setiap nada memiliki cerita dan setiap melodi membawa makna.
                </p>
              </div>
            </div>
          </div>

          <div className="gen14-bph-section">
            <div className="gen14-bph-line"></div>
            <h2 className="gen14-bph-title">BPH</h2>
            <div className="gen14-bph-line"></div>
          </div>

          {/* Character Showcase Section */}
          <div className="gen14-character-showcase">
            <div className="gen14-character-main">
              <div className="gen14-character-image-container">
                <img
                  src={characterList[activeIndex].img}
                  alt={characterList[activeIndex].name}
                  className="gen14-character-main-image"
                />
              </div>

              <div className="gen14-character-details-wrapper">
                <div className="gen14-character-details">
                  <div className="gen14-character-info">
                    <h2 className="gen14-character-name">{characterList[activeIndex].name}</h2>
                    <p
                      className="gen14-character-role"
                      style={{ color: characterList[activeIndex].roleColor }}
                    >
                      {characterList[activeIndex].role}
                    </p>
                    <p className="gen14-character-description">{characterList[activeIndex].desc}</p>
                  </div>
                </div>

                {/* Character Selection Carousel */}
                <div className="gen14-carousel-wrapper">
                  <button className="gen14-carousel-button" onClick={() => handleScroll('left')}>‹</button>
                  <div className="gen14-carousel-scroll" ref={carouselRef}>
                    <div className="gen14-carousel">
                      {getVisibleCharacters().map((char, i) => (
                        <div
                          key={`${char.originalIndex}-${i}`}
                          className={`gen14-character-thumb ${char.originalIndex === activeIndex ? 'active' : ''}`}
                          onClick={() => setActiveIndex(char.originalIndex)}
                        >
                          <img src={char.img} alt={char.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="gen14-carousel-button" onClick={() => handleScroll('right')}>›</button>
                </div>
              </div>
            </div>
          </div>

          <div className="gen14-bph-section">
            <div className="gen14-bph-line"></div>
            <h2 className="gen14-bph-title">Member</h2>
            <div className="gen14-bph-line"></div>
          </div>

        </div>
      )}
    </>
  );
}

export default Gen14;