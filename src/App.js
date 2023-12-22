import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";
import Total from "./Total";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddProduct = (newProduct) => {
    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    setEditingIndex(null);
  };

  const handleEditProduct = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Inventory Management System</h1>
      <div className="row">
        <div className="col-md-6">
          <AddProductForm
            onAddProduct={handleAddProduct}
            editingProduct={
              editingIndex !== null ? products[editingIndex] : null
            }
          />
        </div>
        <div className="col-md-6">
          <Total products={products} />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <ProductList
            products={products}
            onDeleteProduct={handleDeleteProduct}
            onEditProduct={handleEditProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
