import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <tr className="table-row">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString('vi-VN')} đ</td>
      <td>
        <Link to={`/products/${product.id}`} className="btn-detail">
          Chi tiết
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;
