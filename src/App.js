// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';  // Default import (no curly braces)
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />  {/* Corrected */}
//           <Route path="/cart" element={<Cart />} />  {/* Corrected */}
//           <Route path="/checkout" element={<Checkout />} />  {/* Corrected */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';  // Default import
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [products, setProducts] = useState([]);   // State for products
//   const [cartItems, setCartItems] = useState([]);  // State for cart items
//   const [loading, setLoading] = useState(true);    // Loading state

//   useEffect(() => {
//     // Fetch product data from Fake Store API
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);  // Set fetched products
//         setLoading(false);   // Set loading to false
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Add item to cart
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.id !== productId));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route 
//             path="/" 
//             element={<Home products={products} addToCart={addToCart} loading={loading} />}  // Passing data to Home
//           />
//           {/* <Route 
//             path="/cart" 
//             element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}  // Passing cart items to Cart
//           />
//           <Route 
//             path="/checkout" 
//             element={<Checkout cartItems={cartItems} />}  // Passing cart items to Checkout
//           /> */}
//                 <Route 
//         path="/" 
//         element={<Home products={products} addToCart={addToCart} loading={loading} />}  // Correct way to pass data to Home
//       />
//       <Route 
//         path="/cart" 
//         element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}  // Correct way to pass data to Cart
//       />
//       <Route 
//         path="/checkout" 
//         element={<Checkout cartItems={cartItems} />}  // Correct way to pass data to Checkout
//       />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';  // Default import
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [products, setProducts] = useState([]);   // State for products
//   const [cartItems, setCartItems] = useState([]);  // State for cart items
//   const [loading, setLoading] = useState(true);    // Loading state

//   // Fetch product data from Fake Store API
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);  // Set fetched products
//         setLoading(false);   // Set loading to false
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Add item to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.id !== productId));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           {/* Home Page: Display products and pass addToCart function */}
//           <Route 
//             path="/" 
//             element={<Home products={products} addToCart={addToCart} loading={loading} />}  
//           />
          
//           {/* Cart Page: Display cart items and pass removeFromCart function */}
//           <Route 
//             path="/cart" 
//             element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}  
//           />
          
//           {/* Checkout Page: Display cart items for checkout */}
//           <Route 
//             path="/checkout" 
//             element={<Checkout cartItems={cartItems} />}  
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';  // Default import
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import ProductDetail from './components/ProductDetail';  // Import the new ProductDetail component
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   const [products, setProducts] = useState([]);   // State for products
//   const [cartItems, setCartItems] = useState([]);  // State for cart items
//   const [loading, setLoading] = useState(true);    // Loading state

//   // Fetch product data from Fake Store API
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setProducts(data);  // Set fetched products
//         setLoading(false);   // Set loading to false
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Add item to cart
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   // Remove item from cart
//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.id !== productId));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <ToastContainer position="top-right" autoClose={2000} />
//         <Navbar cartItemCount={cartItems.length} />
//         <Routes>
//           {/* Home Page: Display products and pass addToCart function */}
//           <Route 
//             path="/" 
//             element={<Home products={products} addToCart={addToCart} loading={loading} />}  
//           />
          
//           {/* Cart Page: Display cart items and pass removeFromCart function */}
//           <Route 
//             path="/cart" 
//             element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}  
//           />
          
//           {/* Checkout Page: Display cart items for checkout */}
//           <Route 
//             path="/checkout" 
//             element={<Checkout cartItems={cartItems} />}  
//           />
          
//           {/* Product Detail Page: Show full product description and "Add to Cart" button */}
//           <Route 
//             path="/product/:productId" 
//             element={<ProductDetail addToCart={addToCart} />}  
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetail'
import Home from './components/Home'; // Import Home page
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const yourAddReviewHandler = (review) => {
  // For now, just log the review. Replace with API call when backend is ready.
  console.log('Review submitted:', review);
};


function App() {
  const [showHomePage, setShowHomePage] = useState(false); // Track if Home page is visible
  const [products, setProducts] = useState([]); // Your products data
  const [cartItems, setCartItems] = useState([]); // Your cart items
  const [loading, setLoading] = useState(true); // Track loading state

  // Add items to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
    const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // Fetch product data (example)
  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar cartItemCount={cartItems.length} setShowHomePage={setShowHomePage} />
        <Routes>
          <Route 
            path="/" 
            element={<Home products={products} addToCart={addToCart} loading={loading} showHomePage={showHomePage} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} />} 
          /> */}
          <Route 
            path="/cart" 
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} 
          />
          <Route path="/product/:id" element={<ProductDetails products={products} addReview={yourAddReviewHandler} />} />
          <Route 
            path="/checkout" 
            element={<Checkout cartItems={cartItems} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
