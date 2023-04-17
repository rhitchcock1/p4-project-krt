import React from "react";
// import App from "client/src/components/App.js"

function ReviewCard({review}){
    return (
        <div>
            <h1>Rating: {review.rating_}</h1>
            <h2>Review: {review.review}</h2>
            <img src={review.img} alt={review.review}/>
        </div>
    )
}

export default ReviewCard
   