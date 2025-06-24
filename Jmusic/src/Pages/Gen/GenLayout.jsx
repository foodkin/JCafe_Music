import { Link } from "react-router-dom";
import "./GenLayout.css";

export default function GenLayout({ currentPage = 1, totalPages = 2 }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <Link
        to={`/gen?page=${currentPage - 1}`}
        className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
      >
        &laquo;
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          to={`/gen?page=${page}`}
          className={`pagination-button ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </Link>
      ))}

      <Link
        to={`/gen?page=${currentPage + 1}`}
        className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
      >
        &raquo;
      </Link>
    </div>
  );
}
