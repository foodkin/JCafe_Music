import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css';

const FinalProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPageInput, setShowPageInput] = useState(false);
  const [pageInputValue, setPageInputValue] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Gen 12",
      song: "Apa?",
      members: "Berapa?",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen12"
    },
    {
      id: 2,
      title: "Gen 13",
      song: "Apa?",
      members: "Berapa?",
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
    },
    {
      id: 4,
      title: "Gen 15",
      song: "Alice ya?",
      members: "Berapa?",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen15"
    },
    {
      id: 5,
      title: "Project Title 5",
      song: "Song 5",
      members: "[Member P, Member Q, Member R, Member S]",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen16"
    },
    {
      id: 6,
      title: "Project Title 6",
      song: "Song 6",
      members: "[Member I, Member J, Member K, Member L]",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen17"
    },
    {
      id: 7,
      title: "Project Title 7",
      song: "Song 7",
      members: "[Member E, Member F, Member G, Member H]",
      image: "/images/Comingsoon.jpg",
      route: "/FinalGen18"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const navigateToProject = (index) => {
    if (index < projects.length) {
      navigate(projects[index].route);
    }
  };

  const getNextSlide = () => {
    return (currentSlide + 1) % projects.length;
  };

  const handleEllipsisClick = () => {
    setShowPageInput(true);
  };

  const handlePageInputSubmit = (e) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInputValue);
    if (pageNumber >= 1 && pageNumber <= projects.length) {
      goToSlide(pageNumber - 1);
    }
    setShowPageInput(false);
    setPageInputValue('');
  };

  const handlePageInputCancel = () => {
    setShowPageInput(false);
    setPageInputValue('');
  };

  const getPaginationRange = () => {
    const total = projects.length;
    const current = currentSlide;

    if (total <= 3) {
      return [...Array(total).keys()];
    }

    if (current <= 1) {
      return [0, 1, 'ellipsis', 2];
    }

    if (current >= total - 2) {
      return [total - 3, total - 2, 'ellipsis', total - 1];
    }

    return [current - 1, current, 'ellipsis', current + 1];
  };

  const renderPaginationDots = () => {
    const range = getPaginationRange();
    
    return range.map((item, index) => {
      if (item === 'ellipsis') {
        return (
          <div key={`ellipsis-${index}`} className="pagination-ellipsis">
            {showPageInput ? (
              <form onSubmit={handlePageInputSubmit} className="page-input-form">
                <input
                  type="number"
                  value={pageInputValue}
                  onChange={(e) => setPageInputValue(e.target.value)}
                  onBlur={handlePageInputCancel}
                  autoFocus
                  min="1"
                  max={projects.length}
                  className="page-input"
                />
              </form>
            ) : (
              <button
                className="pagination-ellipsis-btn"
                onClick={handleEllipsisClick}
              >
                <span className="ellipsis-dots">⋯</span>
              </button>
            )}
          </div>
        );
      }

      return (
        <button
          key={item}
          className={`pagination-dot ${currentSlide === item ? 'active' : ''}`}
          onClick={() => goToSlide(item)}
        >
          <span className="dot-number">{item + 1}</span>
        </button>
      );
    });
  };

  return (
    <div className="final-project-container">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-box">
            <h1 className="banner-subtitle">
              -  Final Project Of  - 
            </h1>
            <p className="banner-title">
              <span className="title-letter">J</span>
              <span className="title-dash">-</span>
              <span className="title-letter">Music</span>
            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <div className="project-header">
        <div className="header-line">
          <div className="line-glow"></div>
        </div>
        <h2 className="section-title">
          <span className="title-word">OUR</span>
          <span className="title-word">GENERATION'S</span>
          <span className="title-word">WORKS</span>
        </h2>
        <div className="header-line">
          <div className="line-glow"></div>
        </div>
      </div>

      <div className="project-content">
        <div className={`project-info ${isTransitioning ? 'transitioning' : ''}`}>
          <h3 className="project-title">
            <span className="title-main">{projects[currentSlide].title}</span>
          </h3>
          <div className="project-details">
            <div className="detail-row">
              <span className="detail-label">
                <span className="label-icon">♪</span>
                Theme:
              </span>
              <span className="detail-value">{projects[currentSlide].song}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">
                <span className="label-icon">♦</span>
                Members:
              </span>
              <span className="detail-value">{projects[currentSlide].members}</span>
            </div>
          </div>
        </div>

        <div className="project-slider">
          <button className={`slider-btn prev-btn ${isTransitioning ? 'disabled' : ''}`} onClick={prevSlide}>
            <span className="btn-icon">‹</span>
            <div className="btn-glow"></div>
          </button>

          <div className="project-image-container">
            <div className={`image-stack ${isTransitioning ? 'transitioning' : ''}`}>
              <div className="image-shadow">
                <img
                  src={projects[getNextSlide()].image}
                  alt="Next preview"
                  className="next-preview-image"
                />
                <div className="shadow-overlay"></div>
              </div>
              <div className="main-image-wrapper">
                <img
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="project-image"
                  onClick={() => navigateToProject(currentSlide)}
                />
                <div className="image-border"></div>
                <div className="image-shine"></div>
              </div>
            </div>
          </div>

          <button className={`slider-btn next-btn ${isTransitioning ? 'disabled' : ''}`} onClick={nextSlide}>
            <span className="btn-icon">›</span>
            <div className="btn-glow"></div>
          </button>
        </div>

        <div className="slider-pagination">
          <div className="pagination-container">
            {renderPaginationDots()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalProject;