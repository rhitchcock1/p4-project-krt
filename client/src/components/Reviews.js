import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import reviews_img from "../images/reviews_img.png"

function Reviews({reviewCard}){


  const [reviews, setReviews] = useState([])


  function onDeleteReview(reviewToDelete){
    const updatedReviews= reviews.filter((review) =>review.id !== reviewToDelete.id)
    setReviews(updatedReviews)
  }
  const [reviewArray, setReviewArray] = useState([])

  useEffect(() => {
    fetch("https://krt-kitchen.onrender.com/api/reviews")
    .then ((r) => r.json())
    .then(setReviewArray)
  }, [])
  function onUpdateReview(updatedReview) {
    const updatedReviews = reviewArray.map((review) =>review.id === updatedReview.id ? updatedReview : review)
    setReviewArray(updatedReviews)
  }

  useEffect(() => {
    fetch("https://krt-kitchen.onrender.com/api/reviews")
    .then(respose => respose.json())
    .then(setReviews)

  }, [])
  // const [searchTerm, setSearchTerm] = useState("")
  // function handleSChange(e){
  //   setSearchTerm(e.target.value)
  // }
  // const reviewToDisplay = reviews.filter((rreview)=> 
  //   rreview.rating_.includes(searchTerm)
  //  ) 
  
    const reviewCards = reviews.map((review) =>{
      return <ReviewCard key={review.id} review={review} onDeleteReview={onDeleteReview} onUpdateRating={onUpdateReview}/>
    })



    // const [reviewArray, setReviewArray]= useState([])
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
      fetch('https://krt-kitchen.onrender.com/api/reviews', { // our specific link needs to be added
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newReview)
      })
      .then(response => response.json())
      .then(onAddReview)
    }
    function onAddReview(newReview){
        setReviews([...reviews, newReview])

    }   

    return (
    <div>
      
      {reviewCards}
     
      <div className="sidenav">
        <div>
          <form>
            <div>
          {/* <input  onChange={handleSChange} ></input> */}
        
          </div>
          </form>
        </div>
      <div class="container">
	     {/* <!-- code here --> */}
	    <div class="card">
        
	     	<div class="card-image">	
         <img  className = "fimg" src={reviews_img} alt = "review us"/>
		      	{/* <h2 class="card-heading">
				Get started
				<small>Let us create your account</small>
			</h2> */}
      
		</div>
   
        <form class="card-form" onSubmit={ handleSubmit }>
        <div class="input">
      
       <input class="input-field"  value ={formData.rating_} onChange={handleChange}name="rating_" type="number" placeholder="Rating"/>
       <label class="input-label">Rating</label>
       </div>
      
       {/* <div>
       <input inputStyle="underline" labelStyle="stacked" startIcon="bubble" placeholder="Textarea with left icon" label="About me">
         </div> */}
         <div class="input">
         <input class="input-field" value ={formData.review} onChange={handleChange}name="review" type="text" placeholder="Review"/>
         <label class="input-label">How'd we do?</label>
       </div>
       <div class="input">
         <input  class="input-field" value ={formData.img} onChange={handleChange}name="img" type= "text" placeholder="Image"/>
         <label class="input-label">Add an image?</label>
       </div>
       <div class="input">
         <input class="input-field" value ={formData.user_id} onChange={handleChange}name="user_id" type="number" placeholder="U Id"/>
         <label class="input-label">User</label>
       </div>
       <div class="input">
           <select class="input-field" onChange={handleChange}>
             <option class="input-field" id="North" value = {formData.user_id = 1} >North</option> 
             <option class="input-field" id="South" value ={ 2 }>South</option> 
             <option class="input-field" id="East" value = "3" >East</option> 
             <option class="input-field" id="West" value ="int(4)">West</option> {/* {formData.restaurant_id} */}
           </select>
         <label class="input-label">Location</label>        
       </div>
       <div class="action">
        <button class="action-button" type='submit'>Submit Review</button>
      </div>
      </form>
      {/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		  </div> */}
	     </div>
    </div>
      </div>
      
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