import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";

function Reviews({reviewCard}){
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:5555/reviews")
    .then(respose => respose.json())
    .then(setReviews)

  }, [])
    const reviewCards = reviews.map((review) =>{
      return <ReviewCard key={review.id} review={review}/>
    })

    const [reviewArray, setReviewArray]= useState([])
    const [formData, SetFormData] = useState({
      rating_:"",
      review:"",
      img: "",
      user_id: "",
      restaurant_id: "",

    
    })
    
    function handleChange(e){
      SetFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
    function handleSubmit(e){
      e.preventDefault()
      const newReview = {
        rating_: formData.rating_,
        review: formData.review,
        img: formData.img,
        user_id: formData.user_id,
        restaurant_id: formData.restaurant_id,
      }
      fetch('http://localhost:4000/reviews', { // our specific link needs to be added
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newReview)
      })
      .then(response => response.json())
      .then(onAddReview)
    }
    function onAddReview(newReview){
        setReviewArray(...reviewArray, newReview)

    }
     
    return (
    <div>
      {reviewCards}
      <h1>ADD A REVIEW </h1>
        <form onSubmit={ handleSubmit }>
        <div>
         <input value ={formData.rating_} onChange={handleChange}name="rating_" type="number" placeholder="Rating"/>
       </div>
       <div>
         <input value ={formData.review} onChange={handleChange}name="review" type="text" placeholder="Review"/>
       </div>
       <div>
         <input value ={formData.img} onChange={handleChange}name="img" type= "text" placeholder="Image"/>
        </div>
       <div>
       <div>
         <input value ={formData.user_id} onChange={handleChange}name="user_id" type="number" placeholder="U Id"/>
       </div>
       <div>
         <input value ={formData.restaurant_id} onChange={handleChange}name="restaurant_id" type="number" placeholder="R id"/>
       </div>
        <button type='submit'>Submit Review</button>
      </div>
      </form>
    </div>
    );
 
}

export default Reviews

// function Reviews() {
  
//   const [reviews, setReviews] = useState([])

//   const addReview = (r) => {
//     const reviewArr = [...reviews, r]
//     fetch('', { // our specific link needs to be added
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(r)
//     })
//     .then(response => response.json())
//     setReviews(reviewArr)
//   }

// function ReviewForm({addReview}) {
//   const [ newRating, setNewRating ] = useState()
//   const [ newReview, setNewReview ] = useState()
//   const [ newImg, setNewImg ] = useState()
    
//   const ratingChange = e => setNewRating(e.target.value)
//   const reviewChange = e => setNewReview(e.target.value)
//   const imgChange = e => setNewImg(e.target.value)
    
//   const handleSubmit = e => {
//     e.preventDefault()
//     const newReviewCard = {
//       rating: newRating,
//       review: newReview,
//       img: newImg,
//     }
//     addReview(newReviewCard)
//   }
  
// return (
//   <h1>Reviews!</h1>,
//   <div>
//     <span> ADD A REVIEW </span>
//     <form onSubmit={ handleSubmit }>
//       <div></div>
//     <div>
//       <input placeholder='rating'onChange={ e => ratingChange(e) }/>
//     </div>
//     <div>
//       <input placeholder='review'onChange={ e => reviewChange(e) }/>
//     </div>
//     <div>
//       <input placeholder='img link'onChange={ e => imgChange(e) }/>
//     </div>
//     <div>
//       <button type='submit'>Submit Review</button>
//     </div>
//     </form>
//   </div>
//   )
// }

// }

// export default Reviews;