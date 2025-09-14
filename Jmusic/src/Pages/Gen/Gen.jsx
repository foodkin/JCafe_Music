import { useMemo, useCallback } from "react";
import "./Gen.css";
import GenLayout from "./GenLayout";
import { Link } from "react-router-dom";

export default function Gen() {
  const genData = useMemo(() => [
    {
      id: "gen12",
      path: "/gen12",
      title: "GEN 12",
      image: "/images/gen12.webp",
      alt: "Generation 12",
      hasOverflow: false
    },
    {
      id: "gen13", 
      path: "/gen13",
      title: "GEN 13",
      image: "/images/gen13.webp",
      alt: "Generation 13",
      hasOverflow: false
    },
    {
      id: "gen14",
      path: "/gen14", 
      title: "GEN 14",
      image: "/images/gen14.webp",
      backgroundImage: "/images/bg-gen14.webp",
      alt: "Overlay GEN 14",
      backgroundAlt: "Background GEN 14",
      hasOverflow: true,
      overlayStyle: {
        position: "relative",
        zIndex: 2,
        maxHeight: "300%",
        top: "30px"
      }
    },
    {
      id: "gen15",
      path: "/gen15",
      title: "GEN 15", 
      image: "/images/gen15.webp",
      backgroundImage: "/images/bg-gen15.webp",
      alt: "Overlay GEN 15",
      backgroundAlt: "Background GEN 15",
      hasOverflow: true
    }
  ], []);

  const layoutProps = useMemo(() => ({
    currentPage: 1,
    totalPages: 2
  }), []);

  const handleImageError = useCallback((e) => {
    console.log(`Image failed to load: ${e.target.src}`);
  }, []);

  const handleImageLoad = useCallback((e) => {
    console.log(`Image loaded successfully: ${e.target.src}`);
  }, []);

  const renderGenBanner = useCallback((gen) => {
    const bannerClass = gen.hasOverflow 
      ? "gen-banner gen-banner--with-overflow" 
      : "gen-banner";
    
    const wrapperClass = gen.hasOverflow
      ? "gen-image-wrapper gen-image-wrapper--overflow"
      : "gen-image-wrapper";

    const overlayClass = gen.id === "gen15" 
      ? "overlay-image overlay-image--overflow"
      : "overlay-image";

    return (
      <Link key={gen.id} to={gen.path} className={bannerClass}>
        {gen.backgroundImage && (
          <img
            src={gen.backgroundImage}
            alt={gen.backgroundAlt}
            className="background-image"
          />
        )}

        <div className={wrapperClass}>
          <img
            src={gen.image}
            alt={gen.alt}
            className={gen.hasOverflow ? overlayClass : undefined}
            style={gen.overlayStyle}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        </div>

        <div className="gen-box">
          <h2>{gen.title}</h2>
        </div>
      </Link>
    );
  }, [handleImageError, handleImageLoad]);

  return (
    <div className="gen-container">
      <h1 className="gen-title">GENERATIONS</h1>
      <div className="gen-section">
        {genData.map(renderGenBanner)}

        {/* Coming Soon */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img src="/images/comingsoon.webp" alt="Coming Soon" /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>
      </div>

      <GenLayout {...layoutProps} />
    </div>
  );
}