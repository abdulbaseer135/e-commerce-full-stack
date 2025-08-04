import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ cartItemCount }) => {
  const location = useLocation();
  const [showMiniNavbar, setShowMiniNavbar] = useState(location.pathname === '/' || location.pathname === '/men' || location.pathname === '/women' || location.pathname === '/kids');

  React.useEffect(() => {
    // Show mini navbar on home and category pages
    if (
      location.pathname === '/' ||
      location.pathname === '/men' ||
      location.pathname === '/women' ||
      location.pathname === '/kids'
    ) {
      setShowMiniNavbar(true);
    } else {
      setShowMiniNavbar(false);
    }
  }, [location.pathname]);

  const handleHomeClick = () => {
    setShowMiniNavbar(true);
  };

  // No need to close mini navbar on category click

  const handleLinkClick = () => {
    setShowMiniNavbar(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={handleHomeClick}>E-Shop</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={handleHomeClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-icon-wrapper" onClick={handleLinkClick}>
              <FaShoppingCart className="cart-icon" />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/checkout" onClick={handleLinkClick}>Checkout</Link>
          </li>
        </ul>
      </nav>
      {showMiniNavbar && (
        <div className="mini-navbar">
          <ul>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/kids">Kids</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import '../styles/Navbar.css';

// const Navbar = ({ cartItemCount }) => {
//   const [showMiniNavbar, setShowMiniNavbar] = useState(false);

//   const handleHomeClick = () => {
//     setShowMiniNavbar(true);
//   };

//   const handleLinkClick = () => {
//     setShowMiniNavbar(false);
//   };

//   return (
//     <>
//       {/* <nav className="navbar">
//         <div className="logo">
//           <Link to="/" onClick={handleHomeClick}>E-Shop</Link>
//         </div>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" onClick={handleHomeClick}>Home</Link>
//           </li>
//           <li>
//             <Link to="/men" onClick={handleLinkClick}>Men</Link>
//           </li>
//           <li>
//             <Link to="/women" onClick={handleLinkClick}>Women</Link>
//           </li>
//           <li>
//             <Link to="/kids" onClick={handleLinkClick}>Kids</Link>
//           </li>
//           <li>
//             <Link to="/cart" className="cart-icon-wrapper" onClick={handleLinkClick}>
//               <FaShoppingCart className="cart-icon" />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">{cartItemCount}</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <Link to="/checkout" onClick={handleLinkClick}>Checkout</Link>
//           </li>
//         </ul>
//       </nav> */}
//        {/* // ...existing code... */}
//       <nav className="navbar">
//         <div className="logo">
//           <Link to="/" onClick={handleHomeClick}>E-Shop</Link>
//         </div>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" onClick={handleHomeClick}>Home</Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={handleLinkClick}>About</Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
//           </li>
//           <li>
//             <Link to="/cart" className="cart-icon-wrapper" onClick={handleLinkClick}>
//               <FaShoppingCart className="cart-icon" />
//               {cartItemCount > 0 && (
//                 <span className="cart-badge">{cartItemCount}</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <Link to="/checkout" onClick={handleLinkClick}>Checkout</Link>
//           </li>
//         </ul>
//       </nav>
// {/* // ...existing code... */}
//       {showMiniNavbar && (
//         <div className="mini-navbar">
//           <ul>
//             <li><Link to="/men" onClick={handleLinkClick}>Men</Link></li>
//             <li><Link to="/women" onClick={handleLinkClick}>Women</Link></li>
//             <li><Link to="/kids" onClick={handleLinkClick}>Kids</Link></li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;