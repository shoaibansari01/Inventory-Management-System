import React from 'react';
import './Total.css';

const Total = ({ products }) => {
  const totalProducts = products.length;
  const totalQuantity = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.amount, 0).toFixed(2);

  return (
    <div className="total-container">
      <h2>Total</h2>
      <div className="total-section">
        <span>Total Products: {totalProducts}</span>
        <span>Total Quantity: {totalQuantity}</span>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Total;
