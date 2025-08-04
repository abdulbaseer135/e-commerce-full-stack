import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stars === 0 || !review.trim() || !name.trim()) return;
    // For full stack: send { name, review, stars } to backend here
    if (onSubmit) onSubmit({ name, review, stars });
    setStars(0);
    setHover(0);
    setReview('');
    setName('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <div className="star-rating">
        {[1,2,3,4,5].map((star) => (
          <button
            type="button"
            key={star}
            className={star <= (hover || stars) ? 'on' : 'off'}
            onClick={() => setStars(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(stars)}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
          >
            <FaStar />
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Write your review..."
        value={review}
        onChange={e => setReview(e.target.value)}
        rows={4}
        required
      />
      <button type="submit" disabled={stars === 0 || !review.trim() || !name.trim()}>
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;