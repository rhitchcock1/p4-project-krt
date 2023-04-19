import React, {useState} from "react";

function Reviews() {
  
  const [reviews, setReviews] = useState([])

  const addReview = (r) => {
    const reviewArr = [...reviews, r]
    fetch('', { // our specific link needs to be added
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(r)
    })
    .then(response => response.json())
    setReviews(reviewArr)
  }

function ReviewForm({addReview}) {
  const [ newRating, setNewRating ] = useState()
  const [ newReview, setNewReview ] = useState()
  const [ newImg, setNewImg ] = useState()
    
  const ratingChange = e => setNewRating(e.target.value)
  const reviewChange = e => setNewReview(e.target.value)
  const imgChange = e => setNewImg(e.target.value)
    
  const handleSubmit = e => {
    e.preventDefault()
    const newReviewCard = {
      rating: newRating,
      review: newReview,
      img: newImg,
    }
    addReview(newReviewCard)
  }
  
return (
  <h1>Reviews!</h1>,
  <div>
    <span> ADD A REVIEW </span>
    <form onSubmit={ handleSubmit }>
      <div></div>
    <div>
      <input placeholder='rating'onChange={ e => ratingChange(e) }/>
    </div>
    <div>
      <input placeholder='review'onChange={ e => reviewChange(e) }/>
    </div>
    <div>
      <input placeholder='img link'onChange={ e => imgChange(e) }/>
    </div>
    <div>
      <button type='submit'>Submit Review</button>
    </div>
    </form>
  </div>
  )
}

}

export default Reviews;