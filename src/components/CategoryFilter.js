import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-group">
      <label htmlFor="category-select" className="filter-label">
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="filter-select"
      >
        <option value="">Tất cả danh mục</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
