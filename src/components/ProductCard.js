// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>${product.price}</p>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';
// import '../styles/ProductCard.css';

// const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p><strong>${product.price}</strong></p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;


import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
