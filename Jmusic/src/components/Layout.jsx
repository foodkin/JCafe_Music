import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Layout.css';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const layoutContainer = document.querySelector('.layout-container');
    if (menuOpen) {
      layoutContainer?.classList.add('menu-open');
    } else {
      layoutContainer?.classList.remove('menu-open');
    }

    return () => {
      layoutContainer?.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating musical notes */}
      <div className="floating-notes">
        <span>🎵</span>
        <span>🎶</span>
        <span>🎵</span>
        <span>🎶</span>
        <span>🎵</span>
        <span>🎶</span>
      </div>

      <div className="layout-container">
        <div className="layout-fixed-logo">
          {/* ganti png -> webp */}
          <img src="/images/jmusic-logo.webp" alt="JMusic Logo" className="layout-logo-img" />
        </div>

        <header>
          <nav className="layout-navbar">
            <div className="layout-nav-container">
              <div
                className={`layout-hamburger layout-fixed-hamburger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>

              <ul className={`layout-nav-menu ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/gen" onClick={closeMenu}>Gen</Link></li>
                <li><Link to="/finalproject" onClick={closeMenu}>Final Project</Link></li>

                {/* Tambahan Link Sosial Media */}
                <div className="layout-social-links layout-social-nav" style={{ marginTop: "2rem" }}>
                  <a
                    href="https://youtube.com/@jcafemusic?si=pdMLfO1gTR7Zvjf1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/jcafemusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="mailto:jcafemusic.mail@gmail.com"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </ul>
            </div>
          </nav>
        </header>

        {menuOpen && <div className={`layout-menu-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>}

        <main className="layout-main-content">
          <Outlet />
        </main>

        <footer className="layout-footer">
          <p>&copy; JMusic. All rights reserved.</p>
          <div className="layout-social-links">
            <a
              href="https://youtube.com/@jcafemusic?si=pdMLfO1gTR7Zvjf1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/jcafemusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:jcafemusic.mail@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
