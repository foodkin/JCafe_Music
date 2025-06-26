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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  return (
    <div className="layout-container">
      <div className="logo fixed-logo">
        <img src="/images/jmusic-logo.png" alt="JMusic Logo" className="logo-img" />
      </div>

      <header>
        <nav className="navbar">
          <div className="nav-container">
            <div
              className={`hamburger fixed-hamburger ${menuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/gen" onClick={closeMenu}>Gen</Link></li>
              <li><Link to="/finalproject" onClick={closeMenu}>Final Project</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Overlay untuk blur transparan */}
      {menuOpen && <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>}

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; JMusic. All rights reserved.</p>
        <div className="social-links">
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
  );
}

export default Layout;