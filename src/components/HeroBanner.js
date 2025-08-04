
// // src/components/HeroBanner.js
// import React from 'react';
// import '../styles/Hero.css';

// const HeroBanner = () => (
//   <div className="hero">
//     <div className="hero-text">
//       <h1>Smart Collection</h1>
//       <p>Stylish. Affordable. Premium. The ultimate collection for you.</p>
//       <button>Shop Now</button>
//     </div>
//     <div className="hero-image">
//       <img src="/assets/banner-watch.png" alt="Banner" />
//     </div>
//   </div>
// );

// export default HeroBanner;


import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

const banners = [
  {
    title: 'Smart Collection',
    desc: 'Stylish. Affordable. Premium. The ultimate collection for you.',
    img: '/assets/banner-watch.png',
    btn: 'Shop Now'
  },
  {
    title: 'Trendy Fashion',
    desc: 'Discover the latest trends for men, women, and kids.',
    img: '/assets/banner-fashion.png',
    btn: 'Explore'
  },
  {
    title: 'Exclusive Deals',
    desc: 'Save big on top brands and new arrivals.',
    img: '/assets/banner-sale.png',
    btn: 'View Offers'
  }
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [current]);

  const { title, desc, img, btn } = banners[current];

  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>{btn}</button>
      </div>
      <div className="hero-image">
        <img src={img} alt="Banner" />
      </div>
      <div className="hero-dots">
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;