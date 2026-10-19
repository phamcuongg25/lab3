import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    return (
        <div className="product-detail-container">


            {!product ? (
                <div className="detail-card not-found-box">
                    <h2>404 - Không tìm thấy sản phẩm</h2>
                    <p>Trang bạn đang tìm kiếm không tồn tại</p>
                    <div className="back-action">
                        <Link to="/" className="btn-secondary">
                            Về trang chủ
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="detail-card">
                    <table className="detail-table">
                        <div className="back-action">
                            <Link to="/products" className="btn-secondary">
                                Quay lại list
                            </Link>
                        </div>
                        <h2>{product.name}</h2>
                        <tbody>
                            <tr>
                                <th>ID:</th>
                                <td>{product.id}</td>
                            </tr>
                            <tr>
                                <th>Danh mục:</th>
                                <td>{product.category}</td>
                            </tr>
                            <tr>
                                <th>Giá:</th>
                                <td>{product.price.toLocaleString('vi-VN')} đ</td>
                            </tr>
                            <tr>
                                <th>Mô tả:</th>
                                <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;
