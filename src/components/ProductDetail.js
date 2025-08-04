// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';  // To access the route parameter (product ID)
// import '../styles/ProductDetail.css';

// const ProductDetail = ({ addToCart }) => {
//   const { productId } = useParams();  // Get the product ID from the URL
//   const [product, setProduct] = useState(null);  // State to store the product details
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the individual product data using the product ID
//     fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then(response => response.json())
//       .then(data => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//         setLoading(false);
//       });
//   }, [productId]);  // Fetch new data when the productId changes

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found!</p>;
//   }

//   return (
//     <div className="product-detail">
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} />
//       <p>{product.description}</p>
//       <p><strong>${product.price}</strong></p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import '../styles/ProductDetail.css';

const ProductDetail = ({ addToCart, addReview }) => {
  const { id } = useParams(); // <-- FIXED
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const reviewRef = useRef(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) // <-- FIXED
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (window.location.hash === '#reviews' && reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleReviewSubmit = (review) => {
    setReviews(prev => [review, ...prev]);
    if (addReview) addReview(review);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <div ref={reviewRef} id="reviews" className="product-reviews-section">
        <h2>Customer Reviews</h2>
        <ReviewForm onSubmit={handleReviewSubmit} />
        <div className="reviews-list">
          {reviews.length === 0 && <p>No reviews yet. Be the first to review!</p>}
          {reviews.map((r, idx) => (
            <div key={idx} className="single-review">
              <div className="review-header">
                <strong>{r.name}</strong>
                <span>
                  {[...Array(r.stars)].map((_, i) => (
                    <span key={i} style={{ color: '#f1c40f', fontSize: '1.1em' }}>★</span>
                  ))}
                  {[...Array(5 - r.stars)].map((_, i) => (
                    <span key={i} style={{ color: '#ccc', fontSize: '1.1em' }}>★</span>
                  ))}
                </span>
              </div>
              <div className="review-body">{r.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;