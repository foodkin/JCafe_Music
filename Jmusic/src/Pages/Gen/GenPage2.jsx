import "./Gen.css";
import GenLayout from "./GenLayout";

export default function GenPage2() {
  const handleImageError = (e) => {
    console.log(`Image failed to load: ${e.target.src}`);
  };

  const handleImageLoad = (e) => {
    console.log(`Image loaded successfully: ${e.target.src}`);
  };

  return (
    <div className="gen-container">
      <h1 className="gen-title">GENERATIONS</h1>
      <div className="gen-section">
        {/* 5 kotak Coming Soon */}
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

      <GenLayout currentPage={2} totalPages={2} />
    </div>
  );
}