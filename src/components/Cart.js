// import React, { useState } from 'react';
// import '../styles/Cart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: "T-shirt", price: 20, quantity: 2 },
//     // Add more items as necessary
//   ]);

//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h1>Your Cart</h1>
//       {cartItems.map(item => (
//         <div key={item.id} className="cart-item">
//           <h4>{item.name}</h4>
//           <p>Price: ${item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//         </div>
//       ))}
//       <h3>Total: ${totalPrice}</h3>
//       <button>Proceed to Checkout</button>
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import '../styles/Cart.css';

// const Cart = ({ cartItems, removeFromCart }) => {
//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React from 'react';
// import '../styles/Cart.css';

// const Cart = ({ cartItems, removeFromCart }) => {
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.title} style={{ width: '50px' }} />
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <p>{item.description.slice(0, 30)}...</p>  {/* Short description */}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//       {cartItems.length > 0 && (
//         <div className="cart-total">
//           <h3>Total: ${totalPrice}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate total price (consider quantity if you have it)
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} style={{ width: '50px' }} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            {item.quantity && <p>Qty: {item.quantity}</p>}
            <p>{item.description?.slice(0, 30)}...</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;