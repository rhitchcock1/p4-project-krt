import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard"
// import React from "react";
// import { Switch, Route } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:5555/reviews")
    .then(respose => respose.json())
    .then(setReviews)

  }, [])
    const reviewCards = reviews.map((review) =>{
      return <ReviewCard key={review.id} review={review}/>
    })
  return (
  <div>
    <h1> Welcome to KRT Kitchen</h1>
    <h2> A modern eatery specializing in American comfort food </h2>
    {reviewCards}
  </div>
  )
}

export default App;
