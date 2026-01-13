import { useEffect, useState } from "react";

const CustomerReviews = () => {
  const [reviewInput, setReviewInput] = useState("");

  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = () => {
    const reviewText = reviewInput.trim();
    if (reviewText === "") return;

    setReviews([...reviews, reviewText]);
    setReviewInput("");
  };

  const deleteReview = (indexToDelete) => {
    setReviews(reviews.filter((_, index) => index !== indexToDelete));
  };

  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>

      <div className="review-form">
        <input
          type="text"
          placeholder="Write your review..."
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
        />
        <button onClick={addReview}>Add Review</button>
      </div>

      <ul className="reviews-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <span>{review}</span>
            <span
              className="delete-review"
              style={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => deleteReview(index)}
            >
              ✖
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomerReviews;
