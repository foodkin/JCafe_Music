// Gen14.jsx
import { useRef, useState } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/Gen14.css';

function Gen14() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const carouselRef = useRef(null);

  // Font style untuk Montserrat
  const montserratStyle = {
    fontFamily: 'Montserrat, sans-serif'
  };

  // BPH Character List
  const characterList = [
    {
      id: 0,
      name: 'Bathory',
      role: 'Leader',
      roleColor: '#FFD700',
      desc: 'Ketua Jmusic.',
      img: '/images/14Char/Nadine.jpg'
    },
    {
      id: 1,
      name: 'Sai',
      role: 'Vice Leader',
      roleColor: '#9E70CE',
      desc: "Sai, the holder of lust and humility, he's the vice leader of Jmusic, Gen 14. Open, humble, and down to earth, Sai tries his best to connect with the members of Jmusic, though not always successful, you can bet that he does his best.",
      img: '/images/14Char/Sebastian.jpg'
    },
    {
      id: 2,
      name: 'Yuzu',
      role: 'Secretary',
      roleColor: '#000000',
      desc: (
        <>
          Yuzu is the holder of the sin Wrath and the virtue Diligence. His name comes from the fruit yuzu, known for its tart and slightly sweet taste, which happens to match his own taste buds.
          His role is the secretary. As the oldest among the generations, Yuzu has a deep passion for improving the organization.
          He often advocates for new systems and better structures. To those who do not know him well, he may seem overly serious at first.{' '}
          <span style={{ color: '#000000', fontWeight: 'bold' }}>
            "A wrong answer is not a meaningless one."
          </span>{' '}
          – One of his favorite quotes.
        </>
      ),
      img: '/images/14Char/Wishley.jpg'
    },
    {
      id: 3,
      name: 'Ren Mixe',
      role: 'Treasurer',
      roleColor: '#5D3A9B',
      desc: (
        <>
          Ren Mixe is the holder of Greed and Patience, an ironic duality only he can balance.
          His hands do not merely manage numbers, they command the flow of fortune itself.
          His gaze is sharp enough to slice through deception, and his silence speaks louder than a thousand coins.
          He guards Jmusic's treasury like a dragon over its sacred hoard, unmoved by temptation.
          It is said he can calculate a person's worth with a single glance.
          To challenge him is to play chess with fate...{' '}
          <span style={{ color: '#5D3A9B', fontWeight: 'bold' }}>
            while he's already five moves ahead.
          </span>
        </>
      ),
      img: '/images/14Char/Jeferson.jpg'
    },
    {
      id: 4,
      name: 'Chess',
      role: 'Documentation',
      roleColor: '#20B2AA',
      desc: 'Dokumentasi Jmusic.',
      img: '/images/14Char/Lucky.jpg'
    },
    {
      id: 5,
      name: 'Sakura Inari',
      role: 'Publication',
      roleColor: '#FF69B4',
      desc: 'Publikasi Jmusic.',
      img: '/images/14Char/Sephine.jpg'
    },
    {
      id: 6,
      name: 'Moppo',
      role: 'Logistic',
      roleColor: '#FFA500',
      desc: 'Perlengkapan Jmusic.',
      img: '/images/14Char/Gwendy.jpg'
    },
    {
      id: 7,
      name: 'Gabi',
      role: 'Angle',
      roleColor: '#87CEFA',
      desc: 'Malaikat Jmusic.',
      img: '/images/14Char/Gabi.jpg'
    },
    {
      id: 8,
      name: 'Pito',
      role: 'Demon',
      roleColor: '#FF4500',
      desc: 'Iblis Jmusic.',
      img: '/images/14Char/Pito.jpg'
    }
  ];

  // Member Teams Data (Tanpa subname)
  const memberTeams = [
    {
      name: "Youth at 08:00",
      members: [
        { name: "NPC 1", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 2", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 3", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 4", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 5", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Kurukurumawaru",
      members: [
        { name: "NPC 6", race: "Kurukurumawaru", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 7", race: "Kurukurumawaru", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 8", race: "Kurukurumawaru", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 9", race: "Kurukurumawaru", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 10", race: "Kurukurumawaru", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Yottsuhanabi",
      members: [
        { name: "NPC 11", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 12", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 13", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 14", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Happyaku-ichi",
      members: [
        { name: "NPC 15", race: "Happyaku-ichi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 16", race: "Happyaku-ichi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 17", race: "Happyaku-ichi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 18", race: "Happyaku-ichi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Galileo Galiei",
      members: [
        { name: "NPC 19", race: "Galileo Galiei", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 20", race: "Galileo Galiei", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 21", race: "Galileo Galiei", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 22", race: "Galileo Galiei", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 23", race: "Galileo Galiei", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Tsuki No Usagi",
      members: [
        { name: "NPC 24", race: "Tsuki No Usagi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 25", race: "Tsuki No Usagi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 26", race: "Tsuki No Usagi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 27", race: "Tsuki No Usagi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 28", race: "Tsuki No Usagi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Youfuu Kanon",
      members: [
        { name: "NPC 29", race: "Youfuu Kanon", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 30", race: "Youfuu Kanon", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 31", race: "Youfuu Kanon", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 32", race: "Youfuu Kanon", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "BIJIN TANTEIDAN!!!",
      members: [
        { name: "NPC 33", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 34", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 35", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 36", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Irohana",
      members: [
        { name: "NPC 37", race: "Irohana", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 38", race: "Irohana", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 39", race: "Irohana", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 40", race: "Irohana", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 41", race: "Irohana", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    },
    {
      name: "Tsukaretachi",
      members: [
        { name: "NPC 42", race: "Tsukaretachi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 43", race: "Tsukaretachi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 44", race: "Tsukaretachi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" },
        { name: "NPC 45", race: "Tsukaretachi", desc: "Ongoing", img: "/images/14Char/NPC.jpg" }
      ]
    }
  ];

  const handleLoadingComplete = () => setIsLoading(false);

  const handleScroll = (direction) => {
    setActiveIndex(prev =>
      direction === 'left'
        ? (prev === 0 ? characterList.length - 1 : prev - 1)
        : (prev === characterList.length - 1 ? 0 : prev + 1)
    );
  };

  const getVisibleCharacters = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = (activeIndex + i + characterList.length) % characterList.length;
      visible.push({ ...characterList[index], originalIndex: index });
    }
    return visible;
  };

  const handleMemberClick = (member) => setSelectedMember(member);
  const handleCloseModal = () => setSelectedMember(null);

  return (
    <>
      <div className="gen14-background-layer"></div>

      {isLoading ? (
        <Gen14Loading onLoadingComplete={handleLoadingComplete} imageSrc="/images/Gen14Load.jpg" />
      ) : (
        <div className="gen14-content fade-in" style={montserratStyle}>
          <div className="gen14-welcome-section">
            <h1 className="gen14-welcome-title" style={montserratStyle}>Sins & Virtue🎶</h1>
            <p className="gen14-subtitle" style={montserratStyle}>J Cafe Music Gen 14</p>
          </div>

            <div className="gen14-intro-content">
              <div className="gen14-intro-image">
                <img src="/images/jmusic-logo14.png" alt="J Cafe Music Gen 14" className="gen14-intro-img" />
              </div>
              <div className="gen14-intro-description">
                <h3 className="gen14-intro-title" style={montserratStyle}>Welcome to Gen 14</h3>
                <p className="gen14-intro-text" style={montserratStyle}>Belum kepikiran apa"</p>
              </div>
            </div>

          <div className="gen14-bph-section">
            <div className="gen14-bph-line"></div>
            <h2 className="gen14-bph-title" style={montserratStyle}>BPH</h2>
            <div className="gen14-bph-line"></div>
          </div>

          {/* Character Showcase */}
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
                    <h2 className="gen14-character-name" style={montserratStyle}>{characterList[activeIndex].name}</h2>
                    <p
                      className="gen14-character-role"
                      style={{ color: characterList[activeIndex].roleColor, ...montserratStyle }}
                    >
                      {characterList[activeIndex].role}
                    </p>
                    <p className="gen14-character-description" style={montserratStyle}>{characterList[activeIndex].desc}</p>
                  </div>
                </div>

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
            <h2 className="gen14-bph-title" style={montserratStyle}>Member</h2>
            <div className="gen14-bph-line"></div>
          </div>

          <div className="gen14-member-showcase">
            <div className="gen14-teams-grid">
              {memberTeams.map((team, index) => (
                <div key={index} className="gen14-team-card">
                  <div className="gen14-team-header">
                    <h3 className="gen14-team-name" style={montserratStyle}>{team.name}</h3>
                    <span className="gen14-team-count" style={montserratStyle}>{team.members.length} Members</span>
                  </div>
                  <div className="gen14-team-members">
                    {team.members.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="gen14-member-card"
                        onClick={() => handleMemberClick(member)}
                      >
                        <div className="gen14-member-image">
                          <img src={member.img} alt={member.name} />
                        </div>
                        <div className="gen14-member-info">
                          <h4 className="gen14-member-name" style={montserratStyle}>{member.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Member Detail Modal */}
          {selectedMember && (
            <div className="gen14-modal-overlay" onClick={handleCloseModal}>
              <div className="gen14-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="gen14-modal-close" onClick={handleCloseModal}>×</button>
                <div className="gen14-modal-member">
                  <div className="gen14-modal-image">
                    <img src={selectedMember.img} alt={selectedMember.name} />
                  </div>
                  <div className="gen14-modal-details">
                    <h2 className="gen14-modal-name" style={montserratStyle}>{selectedMember.name}</h2>
                    <span className="gen14-modal-race" style={montserratStyle}>{selectedMember.race}</span>
                    <p className="gen14-modal-description" style={montserratStyle}>{selectedMember.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Gen14;