import React from "react";
// import App from "client/src/components/App.js"

function ReviewCard({review, onDeleteReview,onUpdateReview }){
    function handleDelete(){
        fetch(`http://localhost:5555/reviews/${review.id}`, {
            method: "DELETE",
        })
        onDeleteReview(review)
    }

    function handleLikeClick() {
        const updateObj = {
          rating_: review.rating_ + 1,
        };
    
        fetch(`http://localhost:5555/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(onUpdateReview);
      }
      function handleDisLikeClick() {
        const updateObj = {
          rating_: review.rating_ - 1,
        };
    
        fetch(`http://localhost:5555/reviews/${review.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(onUpdateReview);
      }
   
  

    return (
        <div className = "rcontainer" >
          <div class="gradient-cards">
    <div class="rcard">
    <div class="rcontainer-card">
      <div class="rcontainer-card bg-green-box">

            <h1 class="rcard-title" >Rating: {review.rating_}</h1>
            <button onClick={handleLikeClick}>Rate Me Higher</button>
            <button onClick={handleDisLikeClick}>Rate Me Lower</button>
            <h2 class="rcard-description">Review: {review.review}</h2>
            <img src={review.img} alt={review.review}/>
            <br></br>
            <button onClick={handleDelete}>Delete</button>
            
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    )
}

export default ReviewCard
   