import { useMemo, useCallback } from "react";
import "./Gen.css";
import GenLayout from "./GenLayout";

export default function GenPage2() {
  const layoutProps = useMemo(() => ({
    currentPage: 2,
    totalPages: 2
  }), []);

  const handleImageError = useCallback((e) => {
    console.log(`Image failed to load: ${e.target.src}`);
  }, []);

  const handleImageLoad = useCallback((e) => {
    console.log(`Image loaded successfully: ${e.target.src}`);
  }, []);

  return (
    <div className="gen-container">
      <h1 className="gen-title">GENERATIONS</h1>
      <div className="gen-section">
        {/* Coming Soon 1 */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img 
              src="/images/comingsoon.webp" 
              alt="Coming Soon"
              onError={handleImageError}
              onLoad={handleImageLoad}
            /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        {/* Coming Soon 2 */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img 
              src="/images/comingsoon.webp" 
              alt="Coming Soon"
              onError={handleImageError}
              onLoad={handleImageLoad}
            /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        {/* Coming Soon 3 */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img 
              src="/images/comingsoon.webp" 
              alt="Coming Soon"
              onError={handleImageError}
              onLoad={handleImageLoad}
            /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        {/* Coming Soon 4 */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img 
              src="/images/comingsoon.webp" 
              alt="Coming Soon"
              onError={handleImageError}
              onLoad={handleImageLoad}
            /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        {/* Coming Soon 5 */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img 
              src="/images/comingsoon.webp" 
              alt="Coming Soon"
              onError={handleImageError}
              onLoad={handleImageLoad}
            /> */}
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