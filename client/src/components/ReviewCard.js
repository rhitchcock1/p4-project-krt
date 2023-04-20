import React, { useState } from "react";

function ReviewCard({ review, onDeleteReview, onUpdateReview }) {
  const [likes, setLikes] = useState(review.rating_);

  function handleDelete() {
    fetch(`http://localhost:5555/reviews/${review.id}`, {
      method: "DELETE",
    });
    onDeleteReview(review);
  }

  function handleLikeClick() {
    const updateObj = {
      rating_: likes + 1,
    };

    fetch(`http://localhost:5555/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        setLikes(updatedReview.rating_);
        onUpdateReview(updatedReview);
      });
  }

  function handleDisLikeClick() {
    const updateObj = {
      rating_: likes - 1,
    };

    fetch(`http://localhost:5555/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        setLikes(updatedReview.rating_);
        onUpdateReview(updatedReview);
      });
  }

  return (
    <div className="rcontainer">
      <div class="gradient-cards">
        <div class="rcard">
          <div class="rcontainer-card">
            <div class="rcontainer-card bg-green-box">
              <h1 class="rcard-title">Rating: {likes}</h1>
              <button className = "rbutton" onClick={handleLikeClick}>Rate Me Higher</button>
              <button className = "rbutton" onClick={handleDisLikeClick}>Rate Me Lower</button>
              <h2 class="rcard-description">Review: {review.review}</h2>
              <img src={review.img} alt={review.review} />
              <br></br>
              <button className = "rbutton" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
   