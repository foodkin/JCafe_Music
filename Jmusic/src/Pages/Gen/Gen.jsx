import "./Gen.css";
import GenLayout from "./GenLayout"; // ⬅️ Import pagination
import { Link } from "react-router-dom";

export default function Gen() {
  return (
    <div className="gen-container">
      <h1 className="gen-title">GENERATIONS</h1>
      <div className="gen-section">
        <Link to="/gen12" className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/gen12.png" alt="Generation 12" />
          </div>
          <div className="gen-box">
            <h2>GEN 12</h2>
          </div>
        </Link>

        <Link to="/gen13" className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/gen13.png" alt="Generation 13" />
          </div>
          <div className="gen-box">
            <h2>GEN 13</h2>
          </div>
        </Link>

        <Link to="/gen14" className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/gen14.png" alt="Generation 14" />
          </div>
          <div
            className="gen-box"
            style={{
              backgroundImage: `url("/images/bg-gen14.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2>GEN 14</h2>
          </div>
        </Link>

        <Link to="/gen15" className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/gen15.png" alt="Generation 15" />
          </div>
          <div className="gen-box">
            <h2>GEN 15</h2>
          </div>
        </Link>

        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>
      </div>

      {/* ⬇️ Pagination */}
      <GenLayout currentPage={1} totalPages={2} />
    </div>
  );
}
