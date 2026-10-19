import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as initialProducts } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';

const ITEMS_PER_PAGE = 4

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const selectedCategory = searchParams.get('category') || '';
  const sortOrder = searchParams.get('sort') || 'default';
  const rawPage = parseInt(searchParams.get('page') || '1', 10);
  const parsedPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const categories = useMemo(() => {
    return Array.from(new Set(initialProducts.map((p) => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    if (keyword.trim()) {
      const lowerKeyword = keyword.trim().toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(lowerKeyword)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort by price
    if (sortOrder === 'lowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [keyword, selectedCategory, sortOrder]);

  //tong sna pham
  const totalProducts = filteredProducts.length;

  //tong so trang
  const totalPages = Math.max(1, Math.ceil(totalProducts / ITEMS_PER_PAGE));

  // trang hien tai ko qua tong
  const currentPage = Math.min(parsedPage, totalPages);

  // sice hien thi products
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // update search keyword and reset page to 1
  const handleSearchChange = (val) => {
    const nextParams = new URLSearchParams(searchParams);
    if (val) {
      nextParams.set('keyword', val);
    } else {
      nextParams.delete('keyword');
    }
    nextParams.set('page', '1');
    setSearchParams(nextParams, { replace: true });
  };

  // update category and reset page to 1
  const handleCategoryChange = (val) => {
    const nextParams = new URLSearchParams(searchParams);
    if (val) {
      nextParams.set('category', val);
    } else {
      nextParams.delete('category');
    }
    nextParams.set('page', '1');
    setSearchParams(nextParams);
  };

  // update sort order and reset page to 1
  const handleSortChange = (e) => {
    const val = e.target.value;
    const nextParams = new URLSearchParams(searchParams);
    if (val && val !== 'default') {
      nextParams.set('sort', val);
    } else {
      nextParams.delete('sort');
    }
    nextParams.set('page', '1');
    setSearchParams(nextParams);
  };

  // update page number in URL search params
  const handlePageChange = (newPage) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('page', String(newPage));
    setSearchParams(nextParams);
  };

  return (
    <div className="product-list-container">
      <div className="filter-bar">
        <SearchBar keyword={keyword} onSearchChange={handleSearchChange} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        <div className="filter-group">
          <label htmlFor="sort-select" className="filter-label">
          </label>
          <select
            id="sort-select"
            value={sortOrder}
            onChange={handleSortChange}
            className="filter-select"
          >
            <option value="default">Mặc định</option>
            <option value="lowToHigh">Giá thấp đến cao</option>
            <option value="highToLow">Giá cao đến thấp</option>
          </select>
        </div>
      </div>

      <div className="summary-pagination-bar">
        <div className="product-summary">
          Tổng: <strong>{totalProducts}</strong>{'   '}  |{'   '} Trang{' '}
          <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
        </div>
        <div className="pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="table-responsive">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Danh mục</th>
              <th>Giá</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-table-message">
                  Không tìm thấy sản phẩm nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
