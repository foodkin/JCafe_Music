import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css';

const FinalProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPageInput, setShowPageInput] = useState(false);
  const [pageInputValue, setPageInputValue] = useState('');
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
    },
    {
      id: 4,
      title: "Project Title 4",
      song: "Song 4",
      members: "[Member W, Member X, Member Y, Member Z]",
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
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
      setCurrentSlide(pageNumber - 1);
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

    // Jika total projects <= 3, tampilkan semua
    if (total <= 3) {
      return [...Array(total).keys()];
    }

    // Jika current di posisi 0 atau 1, tampilkan: 1 2 ... 3
    if (current <= 1) {
      return [0, 1, 'ellipsis', 2];
    }

    // Jika current di posisi terakhir atau kedua terakhir
    if (current >= total - 2) {
      return [total - 3, total - 2, 'ellipsis', total - 1];
    }

    // Jika current di tengah, tampilkan: prev current ... next
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
                ...
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
          {item + 1}
        </button>
      );
    });
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
          {renderPaginationDots()}
        </div>
      </div>
    </div>
  );
};

export default FinalProject;