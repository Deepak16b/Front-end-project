// src/Component/Product/ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import products from './productData'; // Assuming you have product data in a separate file

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button className="buy-now-btn">Buy Now</button>
    </div>
  );
};

export default ProductDetails;
