// src/Component/Product/Product.js

import React from 'react';
import './Product.css';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/7/n/-original-imagzm8qzhpuwrak.jpeg?q=70' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/e/8/-original-imahyvntxfrpuw6g.jpeg?q=70' },
  { id: 3, name: 'Product 3', price: 49.99, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/n/s/-original-imah4jyfrgsbebg9.jpeg?q=70' },
  { id: 4, name: 'Product 4', price: 59.99, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/8/w/-original-imah4jz6qhwgukgt.jpeg?q=70' },
  { id: 5, name: 'Product 5', price: 69.99, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/d/p/z9s-5g-i2403-iqoo-original-imah4ccctz6wpznp.jpeg?q=70'},
  { id: 6, name: 'Product 6', price: 79.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/musical-toy/6/m/j/happy-open-set-small-mobile-musical-barbie-phone-for-kids-ab-toy-original-imahf7xyftyjpzfr.jpeg?q=70' },
  { id: 7, name: 'Product 7', price: 89.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/k/1/b/famous-car-remote-control-3d-with-led-lights-chargeable-1-caddle-original-imah47zzdzatezyk.jpeg?q=70' },
  { id: 8, name: 'Product 8', price: 99.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-pull-along/q/4/5/land-rover-defender-1-36-diecast-model-with-openable-doors-and-original-imah4v63m7stwg5c.jpeg?q=70' },
  { id: 9, name: 'Product 9', price: 109.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/vehicle-pull-along/6/y/p/plastic-2-in-1-jcb-construction-vehicle-toy-for-kids-zunbella-10-original-imahyxyvjhsnw8wk.jpeg?q=70' },
  { id: 10, name: 'Product 10', price: 119.99, image: 'https://rukminim2.flixcart.com/image/612/612/l1whaq80/physical-game/o/c/k/yes-2013-gta-v-ps5-action-ps5-original-imagdd78azgg5bza.jpeg?q=70' },
  { id: 11, name: 'Product 11', price: 119.99, image: 'https://rukminim2.flixcart.com/image/612/612/jndhrbk0/physical-game/e/r/z/standard-edition-resident-evil-7-biohazard-full-game-ps4-original-imafa2zhxwrgf6xa.jpeg?q=70' },
  { id: 12, name: 'Product 12', price: 119.99, image: 'https://rukminim2.flixcart.com/image/612/612/k0mqtu80/physical-game/n/9/z/game-of-the-year-marvel-s-spider-man-full-game-dlc-ps4-original-imafke2fjgvfazgd.jpeg?q=70' },
];

const Product = () => {
  return (
    <div className="product-container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;