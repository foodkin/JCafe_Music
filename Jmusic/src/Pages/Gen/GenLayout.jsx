import { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./GenLayout.css";

export default function GenLayout({ currentPage = 1, totalPages = 2 }) {
  const pages = useMemo(() => {
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }, [totalPages]);

  const prevPageUrl = useMemo(() => `/gen?page=${currentPage - 1}`, [currentPage]);
  const nextPageUrl = useMemo(() => `/gen?page=${currentPage + 1}`, [currentPage]);

  const prevButtonClass = useMemo(() => 
    `pagination-button ${currentPage === 1 ? "disabled" : ""}`, 
    [currentPage]
  );

  const nextButtonClass = useMemo(() => 
    `pagination-button ${currentPage === totalPages ? "disabled" : ""}`, 
    [currentPage, totalPages]
  );

  const getPageButtonClass = useCallback((page) => 
    `pagination-button ${page === currentPage ? "active" : ""}`, 
    [currentPage]
  );

  const getPageUrl = useCallback((page) => `/gen?page=${page}`, []);

  const renderPageButton = useCallback((page) => (
    <Link
      key={page}
      to={getPageUrl(page)}
      className={getPageButtonClass(page)}
    >
      {page}
    </Link>
  ), [getPageUrl, getPageButtonClass]);

  return (
    <div className="pagination">
      <Link
        to={prevPageUrl}
        className={prevButtonClass}
      >
        &laquo;
      </Link>

      {pages.map(renderPageButton)}

      <Link
        to={nextPageUrl}
        className={nextButtonClass}
      >
        &raquo;
      </Link>
    </div>
  );
}