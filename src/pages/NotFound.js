import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">Sản phẩm ko tồn tại</h2>
      <p className="not-found-desc">
        404 - Không tìm thấy trang
      </p>
      <Link to="/" className="btn-primary">
        Về trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
