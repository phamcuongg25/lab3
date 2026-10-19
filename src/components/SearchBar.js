import React from 'react';

function SearchBar({ keyword, onSearchChange }) {
  return (
    <div className="filter-group">
      <label htmlFor="search-input" className="filter-label">
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Tìm tên sản phẩm..."
        value={keyword}
        onChange={(e) => onSearchChange(e.target.value)}
        className="filter-input"
      />
    </div>
  );
}

export default SearchBar;
