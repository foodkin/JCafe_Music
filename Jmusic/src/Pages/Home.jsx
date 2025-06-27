import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section dengan Video Background - berada di bawah navbar */}
      <section className="hero-section">
        <video 
          className="video-background" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/images/Video/Angel_With_A_Shotgun.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay untuk blend dengan background */}
        <div className="hero-overlay"></div>
      </section>

      {/* Welcome Section - dipindah ke bawah video */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1 className="hero-title">Welcome to J Cafe Music</h1>
          <p className="hero-subtitle">Experience the perfect blend of music and atmosphere</p>
        </div>
      </section>
      
    </div>
  );
};

export default Home;