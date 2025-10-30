import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css';

const FinalProjectPremium = () => {
  const navigate = useNavigate();
  
  // --- DEFINISI PROYEK ---
  const projects = useMemo(() => [
    { id: 1, title: "Gen 13", song: "Project 2: The Side Story", members: "Berapa?", image: "/images/Comingsoon.webp", route: "/FinalGen13", badge: "Coming Soon", theme_id: 1, readText: "READ >" },
    { id: 2, title: "Gen 14", song: "Sins & Virtue", members: "52", image: "/images/bg-gen14.webp", route: "/FinalGen14", badge: "Available", theme_id: 2, readText: "VIEW >" },
    { id: 3, title: "Gen 15", song: "Alice ya? The Small Project", members: "Berapa?", image: "/images/Comingsoon.webp", route: "/FinalGen15", badge: "Coming Soon", theme_id: 2, readText: "READ >" },
    { id: 4, title: "Gen 16", song: "Song 5: Test Card", members: "[P,Q,R,S]", image: "/images/Comingsoon.webp", route: "/FinalGen16", badge: "Coming Soon", theme_id: 3, readText: "READ >" },
    { id: 5, title: "Gen 17", song: "Another Small Card Test", members: "[P,Q,R,S]", image: "/images/Comingsoon.webp", route: "/FinalGen17", badge: "Coming Soon", theme_id: 3, readText: "READ >" }
  ], []);
  
  const themes = useMemo(() => [
      { id: 'All', name: 'All Themes' },
      { id: 1, name: 'Thematic 1' },
      { id: 2, name: 'Thematic 2' },
      { id: 3, name: 'Thematic 3' }
  ], []);
  
  // --- STATE ---
  const [searchTerm, setSearchTerm] = useState('');
  const [themeFilter, setThemeFilter] = useState('All'); 
  const [statusFilter, setStatusFilter] = useState('All'); 
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || null); 

  // --- LOGIKA FILTER ---
  const filteredAndSortedProjects = useMemo(() => {
    let list = [...projects];

    if (statusFilter !== 'All') {
      list = list.filter(project => 
        project.badge.toLowerCase().includes(statusFilter.toLowerCase())
      );
    }
    
    if (themeFilter !== 'All') {
        const themeId = parseInt(themeFilter);
        list = list.filter(project => project.theme_id === themeId);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(project => 
        project.title.toLowerCase().includes(term) ||
        project.song.toLowerCase().includes(term) ||
        String(project.members).toLowerCase().includes(term)
      );
    }

    return list;
  }, [projects, searchTerm, statusFilter, themeFilter]);

  const featuredProject = useMemo(() => {
    const active = filteredAndSortedProjects.find(p => p.id === activeProjectId);
    return active || filteredAndSortedProjects[0];
  }, [filteredAndSortedProjects, activeProjectId]);

  const sideProjects = useMemo(() => {
    return filteredAndSortedProjects.filter(p => p.id !== featuredProject?.id);
  }, [filteredAndSortedProjects, featuredProject]);

  const selectSideProject = useCallback((projectId) => {
    setActiveProjectId(projectId);
  }, []);

  React.useEffect(() => {
    if (filteredAndSortedProjects.length > 0 && 
        (!activeProjectId || !filteredAndSortedProjects.some(p => p.id === activeProjectId))
    ) {
      setActiveProjectId(filteredAndSortedProjects[0].id);
    }
  }, [filteredAndSortedProjects, activeProjectId]);

  return (
    <div className="final-project-container">
      <div className="final-project-wrapper">
        
        {/* HEADER */}
        <div className="final-project-header">
          <h1 className="final-project-title">JMUSIC Final Projects</h1>
          <div className="title-divider"></div>
        </div>
        
        {/* FILTERS */}
        <div className="filter-section">
          <div className="filter-controls">
            
            <select 
              className="filter-dropdown"
              value={themeFilter} 
              onChange={(e) => setThemeFilter(e.target.value)}
            >
              {themes.map(theme => (
                <option key={theme.id} value={theme.id}>{theme.name}</option>
              ))}
            </select>
            
            <select 
              className="filter-dropdown"
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">Status (All)</option>
              <option value="available">Available</option>
              <option value="coming soon">Coming Soon</option>
            </select>

            <div className="search-group">
              <input 
                type="text" 
                placeholder="Search Gen/Theme..." 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* MAIN GRID */}
        <div className="projects-grid">
          
          {/* FEATURED CARD - LEFT */}
          <div className="featured-column">
            {featuredProject ? (
              <div 
                className="featured-card"
                onClick={() => navigate(featuredProject.route)}
              >
                {/* IMAGE */}
                <div className="featured-image-wrapper">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="featured-image"
                  />
                </div>
                
                {/* BADGE */}
                <div className={`project-badge ${featuredProject.badge === 'Available' ? 'badge-available' : 'badge-coming-soon'}`}>
                  {featuredProject.badge}
                </div>
                
                {/* OVERLAY BOTTOM */}
                <div className="featured-overlay">
                  <div className="featured-content">
                    <div className="featured-text">
                      <p className="featured-song">
                        {featuredProject.song}{' '}
                        <span className="featured-title">[{featuredProject.title}]</span>
                      </p>
                    </div>
                    <button 
                      className="read-button"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        navigate(featuredProject.route);
                      }}
                    >
                      {featuredProject.readText}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="no-featured">
                <p>No featured project available.</p>
              </div>
            )}
          </div>

          {/* SIDE PROJECTS - RIGHT */}
          <div className="side-column">
            <div className="side-projects-list">
              {sideProjects.length > 0 ? (
                sideProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className={`side-project-card ${project.id === activeProjectId ? 'active-card' : ''}`}
                    onClick={() => selectSideProject(project.id)}
                  >
                    {/* IMAGE */}
                    <div className="side-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="side-image"
                      />
                    </div>
                    
                    {/* CONTENT */}
                    <div className="side-content">
                      <div className={`project-badge ${project.badge === 'Available' ? 'badge-available' : 'badge-coming-soon'}`}>
                        {project.badge}
                      </div>
                      <p className="side-text">
                        {project.song}{' '}
                        <span className="side-title">[{project.title}]</span>
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No other projects match your criteria.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinalProjectPremium;