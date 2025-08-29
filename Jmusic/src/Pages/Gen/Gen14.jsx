// Gen14.jsx
import { useRef, useState } from 'react';
import Gen14Loading from '../Feature/Gen14Loading';
import '../CSS/Gen14.css';

function Gen14() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  // 👉 state baru buat full image modal
  const [fullImage, setFullImage] = useState(null);
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
      desc: (
        <>
          Sai, the holder of lust and humility, he's the vice leader of Jmusic, Gen 14.
          Open, humble, and down to earth, Sai tries his best to connect with the members of Jmusic.
          Though not always successful,{' '}
          <span style={{ color: '#9E70CE', fontWeight: 'bold' }}>
            you can bet that he does his best.
          </span>
        </>
      ),
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
          Ren Mixe holds both Greed and Patience, a balance only he can master.
          His hands command fortune's flow, his gaze cuts through deceit, and his silence speaks louder than gold.
          Guardian of Jmusic's treasury, he is untouched by temptation, able to judge a person's worth in a glance.
          Facing him is like playing chess with fate...{' '}
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
      roleColor: '#D82020',
      desc: (
        <>
          Chess is Holder of greed and purity, he also is known for his undying love for tempe mendoan, hence where he got the gluttony title.
          As the documentator of JMusic, he captures the life and rhythm of JMusic through his lens.
          With moods that swing like a metronome, Chess might not always be the easiest to read, but he's always try his best,{' '}
          <span style={{ color: '#D82020', fontWeight: 'bold' }}>
            trying to immortalize every single moment of the club.
          </span>
        </>
      ),
      img: '/images/14Char/Lucky.jpg'
    },
    {
      id: 5,
      name: 'Sakura Inari',
      role: 'Publication',
      roleColor: '#FFD1E1',
      desc: (
        <>
          Sakura is the holder of Envy and kindness. Her job is to share the happiness within J-Music to the world.
          She's cheerful and loves the activities within the club.
          Although she tends to be an airhead,{' '}
          <span style={{ color: '#FFD1E1', fontWeight: 'bold' }}>
            she does her best in her field for the members.
          </span>
        </>
      ),
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
      name: 'Gabrielle',
      role: 'Angle',
      roleColor: '#ddb884',
      desc: (
        <>
          Interested in what humans considered to be music, Gabrielle, also known by Gabi, came down from the heavens and paid a visit, bringing with them a treasured lyre to play along and explore just what exactly the humans enjoy to hear.
          They have yet to find the appeal in the vast genres of music humans have developed, but{' '}
          <span style={{ color: '#ddb884', fontWeight: 'bold' }}>
            classical is a close favorite.
          </span>
        </>
      ),
      img: '/images/14Char/Gabi.jpg'
    },
    {
      id: 8,
      name: 'Mephisto',
      role: 'Demon',
      roleColor: '#ac1f0e',
      desc: (
        <>
          Bored of the constant cracking of fire back in Hell, Memphisto, also known by Pito, sulked so far away from the borders that he just so happened to find himself on Earth, where the first thing he decided to pick up was a microphone with a peculiar shape.
          Metal sounds a little too close to home for him, so{' '}
          <span style={{ color: '#ac1f0e', fontWeight: 'bold' }}>
            slow rock is where he's at.
          </span>
        </>
      ),
      img: '/images/14Char/Pito.jpg'
    }
  ];

  // Member Teams Data (Tanpa subname)
  const memberTeams = [
    {
      name: "Youth at 08:00",
      members: [
        { name: "Cindy", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/Youth/cindy.png" },
        { name: "Milie", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/Youth/milie.png" },
        { name: "Joanna", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/Youth/joanna.png" },
        { name: "Kaori", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/Youth/kaori.png" },
        { name: "Ayla", race: "Youth at 08:00", desc: "Ongoing", img: "/images/14Char/Youth/ayla.png" }
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
        { name: "Calista", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/Yottsuhanabi/Calista.png" },
        { name: "Clock", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/Yottsuhanabi/Clock.png" },
        { name: "Shiio", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/Yottsuhanabi/Shiio.png" },
        { name: "Sofie", race: "Yottsuhanabi", desc: "Ongoing", img: "/images/14Char/Yottsuhanabi/Sofie.png" }
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
        { name: "Abram", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/Bijin/Abram.png" },
        { name: "Cepin", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/Bijin/Cepin.png" },
        { name: "Chessa", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/Bijin/Chessa.png" },
        { name: "Nicol", race: "BIJIN TANTEIDAN!!!", desc: "Ongoing", img: "/images/14Char/Bijin/Nicol.png" }
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
            <h1 className="gen14-welcome-title" style={montserratStyle}>Sins & Virtue</h1>
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
                  
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      onClick={() => setFullImage(selectedMember.img)}
                      style={{ cursor: 'zoom-in' }}
                    />
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

          {fullImage && (
            <div className="gen14-image-overlay" onClick={() => setFullImage(null)}>
              <span className="gen14-image-close">×</span>
              <img className="gen14-image-full" src={fullImage} alt="Full View" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Gen14;