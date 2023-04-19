import React from "react";
// import App from "client/src/components/App.js"

function ReviewCard({review, onDeleteReview}){
    function handleDelete(){
        fetch(`http://localhost:5555/reviews/${review.id}`, {
            method: "DELETE",
        })
        onDeleteReview(review)
    }

    



    return (
        <div>
            <h1>Rating: {review.rating_}</h1>
            <h2>Review: {review.review}</h2>
            <img src={review.img} alt={review.review}/>
            <br></br>
            <button onClick={handleDelete}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default ReviewCard
   