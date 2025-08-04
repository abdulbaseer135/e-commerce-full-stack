// import React from 'react';
// import ProductCard from './ProductCard';  // Make sure you're using the default import
// import '../styles/Home.css';

// const Home = () => {
//   const products = [
//     { id: 1, name: "T-shirt", price: 20, category: "Men", image: "https://via.placeholder.com/150" },
//     { id: 2, name: "Dress", price: 50, category: "Women", image: "https://via.placeholder.com/150" },
//     // Add more products as needed
//   ];

//   return (
//     <div className="home">
//       <h1>Welcome to Our Store</h1>
//       <div className="product-list">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import ProductCard from './ProductCard';  // Default import
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading }) => {
//   return (
//     <div className="home">
//       <h1>Welcome to Our Store</h1>
//       {loading ? (
//         <p>Loading...</p>  // Show loading message while products are being fetched
//       ) : (
//         <div className="product-list">
//           {products.map((product) => (
//             <ProductCard 
//               key={product.id} 
//               product={product} 
//               addToCart={addToCart}  // Pass addToCart function to ProductCard
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import ProductCard from './ProductCard';  // Default import
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading }) => {
//   if (loading) {
//     return <p>Loading...</p>;  // Show loading state while products are being fetched
//   }

//   if (!products || products.length === 0) {
//     return <p>No products found.</p>; // If no products are available
//   }

//   return (
//     <div className="home">
//       <h1>Welcome to Our Store</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard 
//             key={product.id} 
//             product={product} 
//             addToCart={addToCart}  // Pass addToCart function to ProductCard
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import ProductCard from './ProductCard';
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading }) => {
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="home">
//       <h1>Welcome to Our Store</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3>{product.title}</h3>

//             {/* Description truncated with "More" link */}
//             <p>
//               {product.description.slice(0, 50)}...
//               <Link to={`/product/${product.id}`} className="more-link"> More</Link>
//             </p>

//             {/* Mock Star Rating */}
//             <div className="product-rating">
//               ★★★★☆ <span className="review-count">(123)</span>
//             </div>

//             {/* Price */}
//             <p className="price"><strong>${product.price}</strong></p>

//             {/* Buttons */}
//             <div className="button-group">
//               {/* <button onClick={() => addToCart(product)} className="btn add-cart">Add to Cart</button>
//                */}
//                <button
//   onClick={() => {
//     addToCart(product);
//     toast.success(`${product.title} added to cart!`);
//   }}
//   className="btn add-cart"
// >
//   Add to Cart
// </button>
//               <Link to={`/product/${product.id}#reviews`} className="btn review-btn">Add Review</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// === Updated Home.js ===
// src/components/Home.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import ProductCard from './ProductCard';
// import HeroBanner from './HeroBanner';
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading }) => {
//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="home">
//       <HeroBanner />
//       <h2 className="section-heading">Featured Products</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card colorful-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3>{product.title}</h3>
//             <p>{product.description.slice(0, 50)}...
//               <Link to={`/product/${product.id}`} className="more-link"> More</Link>
//             </p>
//             <div className="product-rating">
//               ★★★★☆ <span className="review-count">(123)</span>
//             </div>
//             <p className="price"><strong>${product.price}</strong></p>
//             <div className="button-group">
//               <button onClick={() => {
//                 addToCart(product);
//                 toast.success(`${product.title} added to cart!`);
//               }} className="btn add-cart">Add to Cart</button>
//               <Link to={`/product/${product.id}#reviews`} className="btn review-btn">Add Review</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import ProductCard from './ProductCard';
// import HeroBanner from './HeroBanner';
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading, showHomePage }) => {
//   if (!showHomePage) return null; // If Home page is not shown, return null

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="home">
//       <HeroBanner />
//       <h2 className="section-heading">Featured Products</h2>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card colorful-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3>{product.title}</h3>
//             <p>{product.description.slice(0, 50)}...
//               <Link to={`/product/${product.id}`} className="more-link"> More</Link>
//             </p>
//             <div className="product-rating">
//               ★★★★☆ <span className="review-count">(123)</span>
//             </div>
//             <p className="price"><strong>${product.price}</strong></p>
//             <div className="button-group">
//               <button onClick={() => {
//                 addToCart(product);
//                 toast.success(`${product.title} added to cart!`);
//               }} className="btn add-cart">Add to Cart</button>
//               <Link to={`/product/${product.id}#reviews`} className="btn review-btn">Add Review</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import HeroBanner from './HeroBanner';
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading, showHomePage }) => {
//   if (!showHomePage) return null;
//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="home">
//       <HeroBanner />
//       <h2 className="section-heading">Featured Products</h2>
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card colorful-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-desc">
//               {product.description.slice(0, 50)}...
//               <Link to={`/product/${product.id}`} className="more-link"> More</Link>
//             </p>
//             <div className="product-rating">
//               ★★★★☆ <span className="review-count">(123)</span>
//             </div>
//             <p className="price"><strong>${product.price}</strong></p>
//             <div className="button-group">
//               <button
//                 onClick={() => {
//                   addToCart(product);
//                   toast.success(`${product.title} added to cart!`);
//                 }}
//                 className="btn add-cart"
//               >
//                 Add to Cart
//               </button>
//               <Link to={`/product/${product.id}#reviews`} className="btn review-btn">
//                 Add Review
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import HeroBanner from './HeroBanner';
// import '../styles/Home.css';

// const Home = ({ products, addToCart, loading }) => {
//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="home">
//       <HeroBanner />
//       <h2 className="section-heading">Featured Products</h2>
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card colorful-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <h3 className="product-title">{product.title}</h3>
//             <p className="product-desc">
//               {product.description.slice(0, 50)}...
//               <Link to={`/product/${product.id}`} className="more-link"> More</Link>
//             </p>
//             <div className="product-rating">
//               ★★★★☆ <span className="review-count">(123)</span>
//             </div>
//             <p className="price"><strong>${product.price}</strong></p>
//             <div className="button-group">
//               <button
//                 onClick={() => {
//                   addToCart(product);
//                   toast.success(`${product.title} added to cart!`);
//                 }}
//                 className="btn add-cart"
//               >
//                 Add to Cart
//               </button>
//               {/* <Link to={`/product/${product.id}#reviews`} className="btn review-btn">
//                 Add Review
//               </Link> */}
//               <Link to={`/product/${product.id}#reviews`} className="btn review-btn">
//                  Add Review
//                </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeroBanner from './HeroBanner';
import '../styles/Home.css';

const Home = ({ products, addToCart, loading }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="home">
      <HeroBanner />
      <h2 className="section-heading">Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card colorful-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">
              {product.description.slice(0, 50)}...
              <Link to={`/product/${product.id}`} className="more-link"> More</Link>
            </p>
            <div className="product-rating">
              ★★★★☆ <span className="review-count">(123)</span>
            </div>
            <p className="price"><strong>${product.price}</strong></p>
            <div className="button-group">
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.title} added to cart!`);
                }}
                className="btn add-cart"
              >
                Add to Cart
              </button>
              <Link to={`/product/${product.id}#reviews`} className="btn review-btn">
                Add Review
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;