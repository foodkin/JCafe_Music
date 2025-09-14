import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css'; // file CSS di folder yang sama

const FinalProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPageInput, setShowPageInput] = useState(false);
  const [pageInputValue, setPageInputValue] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Gen 12",
      song: "Apa?",
      members: "Berapa?",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen12"
    },
    {
      id: 2,
      title: "Gen 13",
      song: "Apa?",
      members: "Berapa?",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen13"
    },
    {
      id: 3,
      title: "Gen 14",
      song: "Sins & Virtue",
      members: "52",
      image: "/images/bg-gen14.webp",
      route: "/FinalGen14"
    },
    {
      id: 4,
      title: "Gen 15",
      song: "Alice ya?",
      members: "Berapa?",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen15"
    },
    {
      id: 5,
      title: "Project Title 5",
      song: "Song 5",
      members: "[Member P, Member Q, Member R, Member S]",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen16"
    },
    {
      id: 6,
      title: "Project Title 6",
      song: "Song 6",
      members: "[Member I, Member J, Member K, Member L]",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen17"
    },
    {
      id: 7,
      title: "Project Title 7",
      song: "Song 7",
      members: "[Member E, Member F, Member G, Member H]",
      image: "/images/Comingsoon.webp",
      route: "/FinalGen18"
    }
  ], []);

  const currentProject = useMemo(() => projects[currentSlide], [projects, currentSlide]);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
        setIsTransitioning(false);
      }, 300);
    }
  }, [isTransitioning, projects.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
        setIsTransitioning(false);
      }, 300);
    }
  }, [isTransitioning, projects.length]);

  const goToSlide = useCallback((index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  }, [isTransitioning, currentSlide]);

  const navigateToProject = useCallback((index) => {
    if (index < projects.length) {
      navigate(projects[index].route);
    }
  }, [navigate, projects]);

  const handleEllipsisClick = useCallback(() => {
    setShowPageInput(true);
  }, []);

  const handlePageInputSubmit = useCallback((e) => {
    e.preventDefault();
    const pageNumber = parseInt(pageInputValue);
    if (pageNumber >= 1 && pageNumber <= projects.length) {
      goToSlide(pageNumber - 1);
    }
    setShowPageInput(false);
    setPageInputValue('');
  }, [pageInputValue, projects.length, goToSlide]);

  const handlePageInputCancel = useCallback(() => {
    setShowPageInput(false);
    setPageInputValue('');
  }, []);

  const handlePageInputChange = useCallback((e) => {
    setPageInputValue(e.target.value);
  }, []);

  const handleImageClick = useCallback(() => {
    navigateToProject(currentSlide);
  }, [navigateToProject, currentSlide]);

  const getPaginationRange = useCallback(() => {
    const total = projects.length;
    const current = currentSlide;

    if (total <= 5) {
      return [...Array(total).keys()];
    }

    if (current <= 2) {
      return [0, 1, 2, 'ellipsis'];
    }

    if (current >= total - 3) {
      return ['ellipsis', total - 3, total - 2, total - 1];
    }

    return ['ellipsis', current - 1, current, current + 1, 'ellipsis'];
  }, [projects.length, currentSlide]);

  const paginationRange = useMemo(() => getPaginationRange(), [getPaginationRange]);

  const renderPaginationDots = useCallback(() => {
    return paginationRange.map((item, index) => {
      if (item === 'ellipsis') {
        return (
          <div key={`ellipsis-${index}`} className="pagination-ellipsis">
            {showPageInput ? (
              <form onSubmit={handlePageInputSubmit} className="page-input-form">
                <input
                  type="number"
                  value={pageInputValue}
                  onChange={handlePageInputChange}
                  onBlur={handlePageInputCancel}
                  autoFocus
                  min="1"
                  max={projects.length}
                  className="page-input"
                  placeholder="..."
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
  }, [paginationRange, showPageInput, handlePageInputSubmit, pageInputValue, handlePageInputChange, handlePageInputCancel, projects.length, handleEllipsisClick, currentSlide, goToSlide]);

  const navLeftClass = useMemo(() => 
    `nav-button nav-left ${isTransitioning ? 'disabled' : ''}`, 
    [isTransitioning]
  );

  const navRightClass = useMemo(() => 
    `nav-button nav-right ${isTransitioning ? 'disabled' : ''}`, 
    [isTransitioning]
  );

  const imageStackClass = useMemo(() => 
    `image-stack ${isTransitioning ? 'transitioning' : ''}`, 
    [isTransitioning]
  );

  return (
    <div className="final-project-container">
      {/* Main Title Section */}
      <div className="main-title-section">
        <h1 className="final-projects-title">- FINAL PROJECTS OF -</h1>
        <h2 className="jmusic-title">JMUSIC</h2>
      </div>

      {/* Project Title Header */}
      <div className="project-header">
        <div className="header-line left-line"></div>
        <h2 className="project-title-header">
          {currentProject.title}
        </h2>
        <div className="header-line right-line"></div>
      </div>

      {/* Main Slider Content */}
      <div className="slider-wrapper">
        <div className="slider-content">
          {/* Left Navigation Button */}
          <button 
            className={navLeftClass} 
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            ‹
          </button>

          {/* Image Stack Container */}
          <div className="image-stack-container">
            <div className={imageStackClass}>
              {/* Background shadow cards */}
              <div className="shadow-card shadow-card-2"></div>
              <div className="shadow-card shadow-card-1"></div>
              
              {/* Main image card */}
              <div className="main-card">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="project-image"
                  onClick={handleImageClick}
                />
              </div>
            </div>
          </div>

          {/* Right Navigation Button */}
          <button 
            className={navRightClass} 
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            ›
          </button>
        </div>
      </div>

      {/* Project Info - Moved here to be directly below the card */}
      <div className="project-info-tooltip">
        <div className="info-item">
          <span className="info-label">Theme</span>
          <span className="info-value">{currentProject.song}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Members</span>
          <span className="info-value">{currentProject.members}</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-section">
        {renderPaginationDots()}
      </div>
    </div>
  );
};

export default FinalProject;