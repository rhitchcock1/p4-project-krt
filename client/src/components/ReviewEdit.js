import React, {useState} from "react";
// import App from "client/src/components/App.js"

function EditCard({review, onUpdateReview}){
    const [rating_, setRating] = useState("");
    const [review, setReview] = useState("");
    const [img, setImg] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://krt-kitchen.onrender.com/api/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating_: rating_,
                review: review,
                img: img,
            }),
        })
            .then(r => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview));
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

export default EditCard