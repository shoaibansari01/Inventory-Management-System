import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <div className="table-container">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.amount}</td>
                <td className="btn-actions">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => onEditProduct(index)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
