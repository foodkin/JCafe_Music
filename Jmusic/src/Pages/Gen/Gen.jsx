import "./Gen.css";
import GenLayout from "./GenLayout";
import { Link } from "react-router-dom";

export default function Gen() {
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

{/* Gen 12 */}
        <Link to="/gen12" className="gen-banner">
          <div className="gen-image-wrapper">
            <img 
              src="/images/gen12.png" 
              alt="Generation 12"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="gen-box">
            <h2>GEN 12</h2>
          </div>
        </Link>

{/* Gen 13 */}
        <Link to="/gen13" className="gen-banner">
          <div className="gen-image-wrapper">
            <img 
              src="/images/gen13.png" 
              alt="Generation 13"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="gen-box">
            <h2>GEN 13</h2>
          </div>
        </Link>

{/* Gen 14 */}
        <Link to="/gen14" className="gen-banner gen-banner--with-overflow">
          <img
            src="/images/bg-gen14.jpg"
            alt="Background GEN 14"
            className="background-image"
          />

          <div className="gen-image-wrapper gen-image-wrapper--overflow">
            <img
              src="/images/gen14.png"
              alt="Overlay GEN 14"
              className="overlay-image"
              style={{
                position: "relative",
                zIndex: 2,
                maxHeight: "300%",
                top: "30px"
              }}
            />
          </div>

          <div className="gen-box">
            <h2>GEN 14</h2>
          </div>
        </Link>

{/* Gen 15 */}
        <Link to="/gen15" className="gen-banner gen-banner--with-overflow">
          <img
            src="/images/bg-gen15.jpg"
            alt="Background GEN 15"
            className="background-image"
          />

         <div className="gen-image-wrapper gen-image-wrapper--overflow">
            <img
              src="/images/gen15.png"
              alt="Overlay GEN 15"
              className="overlay-image overlay-image--overflow"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="gen-box">
            <h2>GEN 15</h2>
          </div>
        </Link>

{/* Coming Soon */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            {/* <img src="/images/comingsoon.png" alt="Coming Soon" /> */}
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>
      </div>

      <GenLayout currentPage={1} totalPages={2} />
    </div>
  );
}
