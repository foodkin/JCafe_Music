// Gen14.jsx
import { useRef, useState, useMemo, useCallback } from 'react';
import '../CSS/Gen14.css';

function Gen14() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [fullImage, setFullImage] = useState(null);
  const carouselRef = useRef(null); 


  
  const montserratStyle = useMemo(() => ({
    fontFamily: 'Montserrat, sans-serif'
  }), []);

  const characterList = useMemo(() => [
    {
      id: 0,
      name: 'Bathory',
      role: 'Leader',
      roleColor: '#FEDCBD',
      desc: (
        <>
          Once feared as a symbol of blasphemy and imbalance, Bathory was cast as a scapegoat by mortals and demonized by both Heaven and Hell.
          <span style={{ color: '#FEDCBD', fontWeight: 'bold' }}>
            In truth, Baphomet embodied duality light and dark, chaos and order and was never meant to be a force of destruction.
          </span>{' '}
          Centuries of exile left her bitter, yet still bound to her role as guardian of balance.
          When humanity's whimsy began to fracture under endless obstacles, Bathory emerged from obscurity, torn between resentment toward those who condemned her and a duty to restore equilibrium.
          Confronted with mortal compassion and divine hostility alike, Bathory's journey shifted from vengeance to reconciliation.
          No longer content to be a misunderstood figure of fear, it sought redemption not by rejecting her nature, but by embracing its purpose as a bridge between extremes.
        </>
      ),
      img: '/images/14Char/Nadine.webp'
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
      img: '/images/14Char/Sebastian.webp'
    },
    {
      id: 2,
      name: 'Yuzu',
      roleColor: '#A0A0A0',
      role: 'Secretary',
      desc: (
        <>
          Yuzu is the holder of the sin Wrath and the virtue Diligence. His name comes from the fruit yuzu, known for its tart and slightly sweet taste, which happens to match his own taste buds.
          His role is the secretary. As the oldest among the generations, Yuzu has a deep passion for improving the organization.
          He often advocates for new systems and better structures. To those who do not know him well, he may seem overly serious at first.{' '}
          <span style={{ color: '#A0A0A0', fontWeight: 'bold' }}>
            "A wrong answer is not a meaningless one."
          </span>{' '}
          – One of his favorite quotes.
        </>
      ),
      img: '/images/14Char/Wishley.webp'
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
      img: '/images/14Char/Jeferson.webp'
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
      img: '/images/14Char/Lucky.webp'
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
      img: '/images/14Char/Sephine.webp'
    },
    {
      id: 6,
      name: 'Moppo',
      role: 'Logistic',
      roleColor: '#FFCC33',
      desc: 'just a normal guy that always ready for any promblems.',
      img: '/images/14Char/Gwendy.webp'
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
          <span style={{ color: '#ddb184', fontWeight: 'bold' }}> 
            classical is a close favorite.
          </span>
        </>
      ),
      img: '/images/14Char/Gabi.webp'
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
      img: '/images/14Char/Pito.webp'
    }
  ], []);

  const memberTeams = useMemo(() => [
    {
      name: "Youth at 08:00",
      members: [
        { 
          name: "Cindy", 
          race: "Youth at 08:00", 
          desc: "One of the Youth at 08:00 members", 
          img: "/images/14Char/Youth/cindy.webp", 
          containerStyle: {},
          modalImageStyle: { transform: "translate(10px)", height: "200%" },
          imageStyle: { 
            transform: "translate(0px, 100px)",
            height: "160%"
          }
        },
        { 
          name: "Milie", 
          race: "Youth at 08:00", 
          desc: "One of the Youth at 08:00 members", 
          img: "/images/14Char/Youth/milie.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Joanna", 
          race: "Youth at 08:00", 
          desc: "One of the Youth at 08:00 members", 
          img: "/images/14Char/Youth/joanna.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Kaori", 
          race: "Youth at 08:00", 
          desc: "One of the Youth at 08:00 members", 
          img: "/images/14Char/Youth/kaori.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Ayla", 
          race: "Youth at 08:00", 
          desc: "One of the Youth at 08:00 members", 
          img: "/images/14Char/Youth/ayla.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        }
      ]
    },
    {
      name: "Kurukurumawaru",
      members: [
        { 
          name: "Isabelle", 
          race: "Kurukurumawaru", 
          desc: "One of the Kurukurumawaru members", 
          img: "/images/14Char/Kuru/Isabelle.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Jess", 
          race: "Kurukurumawaru", 
          desc: "One of the Kurukurumawaru members", 
          img: "/images/14Char/Kuru/Jess.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Kevin", 
          race: "Kurukurumawaru", 
          desc: "One of the Kurukurumawaru members", 
          img: "/images/14Char/Kuru/Kevin.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Nana", 
          race: "Kurukurumawaru", 
          desc: "One of the Kurukurumawaru members", 
          img: "/images/14Char/Kuru/Nana.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Rafa", 
          race: "Kurukurumawaru", 
          desc: "One of the Kurukurumawaru members", 
          img: "/images/14Char/Kuru/Rafa.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        }
      ]
    },
    {
      name: "Yottsuhanabi",
      members: [
        { 
          name: "Calista", 
          race: "Yottsuhanabi", 
          desc: "One of the Yottsuhanabi members", 
          img: "/images/14Char/Yottsuhanabi/Calista.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Clock", 
          race: "Yottsuhanabi", 
          desc: "One of the Yottsuhanabi members", 
          img: "/images/14Char/Yottsuhanabi/Clock.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Shiio", 
          race: "Yottsuhanabi", 
          desc: "One of the Yottsuhanabi members", 
          img: "/images/14Char/Yottsuhanabi/Shiio.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Sofie", 
          race: "Yottsuhanabi", 
          desc: "One of the Yottsuhanabi members", 
          img: "/images/14Char/Yottsuhanabi/Sofie.webp",
          containerStyle: {},
          imageStyle: {}
        }
      ]
    },
    {
      name: "Happyaku-ichi",
      members: [
        { 
          name: "Gio", 
          race: "Happyaku-ichi", 
          desc: "One of the Happyaku-ichi members", 
          img: "/images/14Char/Happyaku/GIO.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Klir", 
          race: "Happyaku-ichi", 
          desc: "One of the Happyaku-ichi members", 
          img: "/images/14Char/Happyaku/KLIR.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(6px, 140px)",
            height: "200%"
          }
        },
        { 
          name: "Comic", 
          race: "Happyaku-ichi", 
          desc: "One of the Happyaku-ichi members", 
          img: "/images/14Char/Happyaku/KOMIK.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(1px, 90px)",
            height: "160%",
          }
        },
        { 
          name: "Tito", 
          race: "Happyaku-ichi", 
          desc: "One of the Happyaku-ichi members", 
          img: "/images/14Char/Happyaku/TITO.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 210px)",
            height: "260%"
          }
        }
      ]
    },
    {
      name: "Galileo Galieli",
      members: [
        { 
          name: "Lima", 
          race: "Galileo Galieli", 
          desc: "One of the Galileo Galieli members", 
          img: "/images/14Char/Galileo/Lima.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "160%"
          }
        },
        { 
          name: "Flint", 
          race: "Galileo Galieli", 
          desc: "One of the Galileo Galieli members", 
          img: "/images/14Char/Galileo/Flint.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "180%"
          }
        },
        { 
          name: "Faiz", 
          race: "Galileo Galieli", 
          desc: "One of the Galileo Galieli members", 
          img: "/images/14Char/Galileo/Faiz.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "180%"
          }
        },
        { 
          name: "Kevin", 
          race: "Galileo Galieli", 
          desc: "One of the Galileo Galieli members", 
          img: "/images/14Char/Galileo/Kevin.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(-5px, 80px)",
            height: "190%"
          }
        },
        { 
          name: "Mahawira", 
          race: "Galileo Galieli", 
          desc: "One of the Galileo Galieli members", 
          img: "/images/14Char/Galileo/Mahawira.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 90px)",
            height: "180%"
          }
        }
      ]
    },
    {
      name: "Tsuki No Usagi",
      members: [
        { 
          name: "Ang", 
          race: "Tsuki No Usagi", 
          desc: "One of the Tsuki No Usagi members", 
          img: "/images/14Char/Tsuki/Ang.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Daniel Yurusen", 
          race: "Tsuki No Usagi", 
          desc: "One of the Tsuki No Usagi members", 
          img: "/images/14Char/Tsuki/Daniel.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Kaka Yurusu", 
          race: "Tsuki No Usagi", 
          desc: "One of the Tsuki No Usagi members", 
          img: "/images/14Char/Tsuki/kaka.webp",
          containerStyle: {},
          imageStyle: { transform: "translateY(0px)" }
        },
        { 
          name: "Michelle", 
          race: "Tsuki No Usagi", 
          desc: "One of the Tsuki No Usagi members", 
          img: "/images/14Char/Tsuki/michelle.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Xel Kawaii Kowai", 
          race: "Tsuki No Usagi", 
          desc: "One of the Tsuki No Usagi members", 
          img: "/images/14Char/Tsuki/xel.webp",
          containerStyle: {},
          imageStyle: {}
        }
      ]
    },
    {
      name: "Youfuu Kanon",
      members: [
        { 
          name: "Jia", 
          race: "Youfuu Kanon", 
          desc: "One of the Youfuu Kanon members", 
          img: "/images/14Char/Youfuu/Jia.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 140px)",
            height: "200%"
          }
        },
        { 
          name: "Eleonora", 
          race: "Youfuu Kanon", 
          desc: "One of the Youfuu Kanon members", 
          img: "/images/14Char/Youfuu/Eleonora.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 65px)",
            height: "150%"
          }
        },
        { 
          name: "Akmal", 
          race: "Youfuu Kanon", 
          desc: "One of the Youfuu Kanon members", 
          img: "/images/14Char/Youfuu/Akmal.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 122px)",
            height: "200%"
          }
        },
        { 
          name: "Mario", 
          race: "Youfuu Kanon", 
          desc: "One of the Youfuu Kanon members", 
          img: "/images/14Char/Youfuu/Mario.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(30px, 140px)",
            height: "200%"
          }
        }
      ]
    },
    {
      name: "BIJIN TANTEIDAN!!!",
      members: [
        { 
          name: "Abram", 
          race: "BIJIN TANTEIDAN!!!", 
          desc: "One of the BIJIN TANTEIDAN!!! members", 
          img: "/images/14Char/Bijin/Abram.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 120px)",
            height: "200%"
          }
        },
        { 
          name: "Cepin", 
          race: "BIJIN TANTEIDAN!!!", 
          desc: "One of the BIJIN TANTEIDAN!!! members", 
          img: "/images/14Char/Bijin/Cepin.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 135px)",
            height: "200%"
          }
        },
        { 
          name: "Chessa", 
          race: "BIJIN TANTEIDAN!!!", 
          desc: "One of the BIJIN TANTEIDAN!!! members", 
          img: "/images/14Char/Bijin/Chessa.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 140px)",
            height: "200%"
          }
        },
        { 
          name: "Nicol", 
          race: "BIJIN TANTEIDAN!!!", 
          desc: "One of the BIJIN TANTEIDAN!!! members", 
          img: "/images/14Char/Bijin/Nicol.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 125px)",
            height: "200%"
          }
        }
      ]
    },
    {
      name: "Irohana",
      members: [
        { 
          name: "Sae kohana", 
          race: "Irohana", 
          desc: "One of the Irohana members", 
          img: "/images/14Char/Irohana/Sae kohana.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Ann", 
          race: "Irohana", 
          desc: "One of the Irohana members", 
          img: "/images/14Char/Irohana/Ann.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Lex", 
          race: "Irohana", 
          desc: "One of the Irohana members", 
          img: "/images/14Char/Irohana/Lex.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Kumo", 
          race: "Irohana", 
          desc: "One of the Irohana members", 
          img: "/images/14Char/Irohana/Kumo.webp",
          containerStyle: {},
          imageStyle: {}
        },
        { 
          name: "Aurel", 
          race: "Irohana", 
          desc: "One of the Irohana members", 
          img: "/images/14Char/Irohana/Aurel.webp",
          containerStyle: {},
          imageStyle: {}
        }
      ]
    },
    {
      name: "Tsukaretachi",
      members: [
        { 
          name: "Nick", 
          race: "Tsukaretachi", 
          desc: "One of the Tsukaretachi members", 
          img: "/images/14Char/Tsukaretachi/Nick.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 120px)",
            height: "200%"
          }
        },
        { 
          name: "Blu", 
          race: "Tsukaretachi", 
          desc: "One of the Tsukaretachi members", 
          img: "/images/14Char/Tsukaretachi/Blu.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 100px)",
            height: "200%"
          }
        },
        { 
          name: "Eca", 
          race: "Tsukaretachi", 
          desc: "One of the Tsukaretachi members", 
          img: "/images/14Char/Tsukaretachi/Eca.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 120px)",
            height: "200%"
          }
        },
        { 
          name: "Ren", 
          race: "Tsukaretachi", 
          desc: "One of the Tsukaretachi members", 
          img: "/images/14Char/Tsukaretachi/Ren.webp",
          containerStyle: {},
          imageStyle: { 
            transform: "translate(0px, 130px)",
            height: "200%"
          }
        }
      ]
    }
  ], []);

  const handleScroll = useCallback((direction) => {
    setActiveIndex(prev =>
      direction === 'left'
        ? (prev === 0 ? characterList.length - 1 : prev - 1)
        : (prev === characterList.length - 1 ? 0 : prev + 1)
    );
  }, [characterList.length]);

  const handleOpenCharacterModal = useCallback((character) => {
    setSelectedMember({
        name: character.name,
        race: character.role, 
        desc: character.desc,
        img: character.img
    });
  }, []);

  const handleCloseModal = useCallback(() => setSelectedMember(null), []);
  const handleImageClick = useCallback((imgSrc) => setFullImage(imgSrc), []);
  const handleCloseFullImage = useCallback(() => setFullImage(null), []);

  const currentCharacter = useMemo(() => characterList[activeIndex], [characterList, activeIndex]);

  const displayedThumbnails = useMemo(() => {
    const thumbs = [];
    const total = characterList.length;
    let startIndex = activeIndex; 
    
    if (total > 6 && (total - activeIndex) < 6) {
        startIndex = (total - 6 + total) % total; 
    } else if (total <= 6) {
        startIndex = 0; 
    }

    for (let i = 0; i < Math.min(total, 6); i++) { 
        thumbs.push(characterList[(startIndex + i) % total]);
    }
    return thumbs;
  }, [activeIndex, characterList]);


  return (
    <div className="gen14-wrapper">
      {/* BACKGROUND LAYER HANYA UNTUK KOMPONEN INI */}
      <div className="gen14-background-layer"></div> 

      <div
        className="gen14-content fade-in"
        style={montserratStyle}
      >
        <div className="gen14-welcome-section">
          <h1 className="gen14-welcome-title">Sins & Virtue</h1>
          <p className="gen14-subtitle">J Cafe Music Gen 14</p>
        </div>

        <div className="gen14-intro-section">
          <div className="gen14-intro-content">
            <div className="gen14-intro-description">
              <h3 className="gen14-intro-title">Welcome to Gen 14</h3>
              <p className="gen14-intro-text">
                We are the 14th Generation JCAFE Music Club, part of JCAFE UMN, where we create music covers and share the joy of singing Japanese songs! Active in 2024–2025, our generation carries the theme Sins and Virtue (because our BPH is just too chuunibyou).
              </p>
            </div>
          </div>
        </div>

        <div className="gen14-bph-section">
          <div className="gen14-bph-line"></div>
          <h2 className="gen14-bph-title">BPH</h2>
          <div className="gen14-bph-line"></div>
        </div>

        {/* BPH Showcase Section */}
        <div className="gen14-character-showcase-wrapper">
          
          <div className="gen14-character-showcase">
            {/* Bagian Kiri: Detail Karakter */}
            <div className="gen14-character-details-left">
              <div className="gen14-char-stars">★★★★★</div>
              <h2 className="gen14-char-title">{currentCharacter.name}</h2>
              <p className="gen14-char-role" style={{ color: currentCharacter.roleColor }}>{currentCharacter.role}</p>

              <button 
                className="gen14-detail-btn" 
                onClick={() => handleOpenCharacterModal(currentCharacter)} 
              >
                DETAIL
              </button>
            </div>

            {/* Bagian Tengah: Gambar Karakter Utama */}
            <div className="gen14-character-main-image-area">
              <img
                src={currentCharacter.img}
                alt={currentCharacter.name}
                className="gen14-character-main-image"
                onClick={() => handleImageClick(currentCharacter.img)}
              />
            </div>

            {/* Bagian Kanan: Daftar Thumbnails */}
            <div className="gen14-character-thumbnails-right">
              {displayedThumbnails.map((char) => (
                <div
                  key={char.id} 
                  className={`gen14-character-thumbnail ${char.id === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(char.id)}
                >
                  <img src={char.img} alt={char.name} />
                  <span className="gen14-thumbnail-name">{char.name}</span>
                </div>
              ))}
              <button className="gen14-more-btn" onClick={() => handleScroll('right')}>MORE +</button>
            </div>
          </div>
        </div> 

        <div className="gen14-bph-section">
          <div className="gen14-bph-line"></div>
          <h2 className="gen14-bph-title">Member</h2>
          <div className="gen14-bph-line"></div>
        </div>

        <div className="gen14-member-showcase">
          <div className="gen14-teams-grid">
            {memberTeams.map((team, index) => (
              <div key={index} className="gen14-team-card">
                <div className="gen14-team-header">
                  <h3 className="gen14-team-name">{team.name}</h3>
                  <span className="gen14-team-count">{team.members.length} Members</span>
                </div>
                <div className="gen14-team-members">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="gen14-member-card"
                      onClick={() => handleOpenCharacterModal(member)}
                      style={member.containerStyle || {}}
                    >
                      <div className="gen14-member-image">
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          style={member.imageStyle || {}} 
                        />
                      </div>
                      <div className="gen14-member-info">
                        <h4 className="gen14-member-name">{member.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL (untuk BPH dan Member) */}
        {selectedMember && (
          <div className="gen14-modal-overlay" onClick={handleCloseModal}>
            <div className="gen14-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="gen14-modal-close" onClick={handleCloseModal}>×</button>
              <div className="gen14-modal-member">
                <div className="gen14-modal-image">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    onClick={() => handleImageClick(selectedMember.img)}
                  />
                </div>
                <div className="gen14-modal-details">
                  <h2 className="gen14-modal-name">{selectedMember.name}</h2>
                  <span className="gen14-modal-race">{selectedMember.race}</span>
                  <p className="gen14-modal-description">{selectedMember.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FULL IMAGE VIEW */}
        {fullImage && (
          <div className="gen14-image-overlay" onClick={handleCloseFullImage}>
            <span className="gen14-image-close">×</span>
            <img className="gen14-image-full" src={fullImage} alt="Full View" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gen14;