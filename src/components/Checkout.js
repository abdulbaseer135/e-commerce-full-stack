// import React from 'react';
// import '../styles/Checkout.css';

// const Checkout = () => {
//   return (
//     <div className="checkout">
//       <h1>Checkout</h1>
//       <form>
//         <div>
//           <label>Full Name</label>
//           <input type="text" required />
//         </div>
//         <div>
//           <label>Address</label>
//           <input type="text" required />
//         </div>
//         <div>
//           <label>Card Number</label>
//           <input type="text" required />
//         </div>
//         <button type="submit">Place Order</button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;


// import React from 'react';
// import '../styles/Checkout.css';

// const Checkout = ({ cartItems }) => {
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <p>Total Price: ${totalPrice}</p>
//           <button>Proceed to Payment</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;


import React from 'react';
import '../styles/Checkout.css';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <p>Total Price: ${totalPrice}</p>
          <button>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
