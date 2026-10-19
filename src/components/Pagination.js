import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageCount = Math.max(1, totalPages || 1);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination-btn"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Trước
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-btn"
        disabled={currentPage >= pageCount}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Sau
      </button>
    </div>
  );
}

export default Pagination;
