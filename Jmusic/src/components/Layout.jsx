import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gen">Gen</Link></li>
            <li><Link to="/finalproject">Final Project</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; JMusic. All rights reserved.</p>
        <div className="social-links">
          <a href="https://youtube.com/@jcafemusic?si=pdMLfO1gTR7Zvjf1" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/jcafemusic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
