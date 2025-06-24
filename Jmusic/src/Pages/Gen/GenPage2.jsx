import "./Gen.css";
import GenLayout from "./GenLayout"; // ⬅️ Import pagination

export default function GenPage2() {
  return (
    <div className="gen-container">
      <h1 className="gen-title">GENERATIONS</h1>
      <div className="gen-section">
        {/* 5 kotak Coming Soon */}
        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>

        <div className="gen-banner">
          <div className="gen-image-wrapper">
            <img src="/images/comingsoon.png" alt="Coming Soon" />
          </div>
          <div className="gen-box">
            <h2>COMING SOON</h2>
          </div>
        </div>
      </div>

      {/* ⬇️ Pagination, current page 3 */}
      <GenLayout currentPage={2} totalPages={2} />
    </div>
  );
}
