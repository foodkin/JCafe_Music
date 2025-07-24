import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css';

const FinalProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      song: "Berapa?",
      members: "[Member 1, Member 2, Member 3, Member 4, Member 5, Member 6]",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen12"
    },
    {
      id: 2,
      title: "Project Title 2",
      song: "Berapa?",
      members: "[Member A, Member B, Member C, Member D]",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen13"
    },
    {
      id: 3,
      title: "Gen 14",
      song: "Sins & Virtue",
      members: "52",
      image: "/images/bg-gen14.jpg",
      route: "/FinalGen14"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const navigateToProject = (index) => {
    navigate(projects[index].route);
  };

  const getNextSlide = () => {
    return (currentSlide + 1) % projects.length;
  };

  const getPaginationRange = () => {
    const total = projects.length;
    const maxVisible = 3;

    let start = Math.max(currentSlide - Math.floor(maxVisible / 2), 0);
    let end = start + maxVisible;

    if (end > total) {
      end = total;
      start = Math.max(end - maxVisible, 0);
    }

    return [...Array(end - start).keys()].map(i => i + start);
  };

  return (
    <div className="final-project-container">

      {/* Bagian hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-box">
            <h1
              className="hero-subtitle"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              - Final Project Of - 
            </h1>
            <p
              className="hero-title"
              style={{ fontFamily: 'Romaunt Gaolines', fontWeight: 300 }}
            >
              J-Music
            </p>
          </div>
        </div>
      </section>

      {/* Bagian project */}
      <div className="project-header">
        <div className="header-line"></div>
        <h2 className="section-title">OUR GENERATION'S WORKS</h2>
        <div className="header-line"></div>
      </div>

      <div className="project-content">
        <div className="project-info">
          <h3 className="project-title">{projects[currentSlide].title}</h3>
          <div className="project-details">
            <div className="detail-row">
              <span className="detail-label">Theme:</span>
              <span className="detail-value">{projects[currentSlide].song}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Members:</span>
              <span className="detail-value">{projects[currentSlide].members}</span>
            </div>
          </div>
        </div>

        <div className="project-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <span>‹</span>
          </button>

          <div className="project-image-container">
            <div className="image-stack">
              <div className="image-shadow">
                <img
                  src={projects[getNextSlide()].image}
                  alt="Next preview"
                  className="next-preview-image"
                />
              </div>
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
                className="project-image"
                onClick={() => navigateToProject(currentSlide)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>

        <div className="slider-pagination">
          {getPaginationRange().map((index) => (
            <button
              key={index}
              className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => navigateToProject(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalProject;
