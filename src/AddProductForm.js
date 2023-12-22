import React, { useState, useEffect } from 'react';
import './AddProductForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProductForm = ({ onAddProduct, editingProduct }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (editingProduct) {
      setProductName(editingProduct.productName || '');
      setPrice(editingProduct.price || '');
      setQuantity(editingProduct.quantity || '');
      setTotal(editingProduct.amount || '');
    }
  }, [editingProduct]);

  useEffect(() => {
    const calculatedTotal = parseFloat(price) * parseInt(quantity);
    setTotal(isNaN(calculatedTotal) ? '' : calculatedTotal.toFixed(2));
  }, [price, quantity]);

  const handleAddProduct = () => {
    const newProduct = {
      productName,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      amount: parseFloat(total),
    };

    onAddProduct(newProduct);

    setProductName('');
    setPrice('');
    setQuantity('');
    setTotal('');
  };

  const handleCancel = () => {
    setProductName('');
    setPrice('');
    setQuantity('');
    setTotal('');
  };

  return (
    <div className={`form-container ${editingProduct ? 'table-striped' : ''}`}>
      <h2 className="mb-4">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="total" className="form-label">
            Total Amount (Auto-calculated):
          </label>
          <input
            type="number"
            className={`form-control ${editingProduct ? 'table-striped' : ''}`}
            id="total"
            value={total}
            readOnly
          />
        </div>
        <div className="btn-container">
          <button type="button" className="btn btn-primary" onClick={handleAddProduct}>
            {editingProduct ? 'Edit' : 'Add'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
