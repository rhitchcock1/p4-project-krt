import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews";
import NavBar from "./NavBar";
import Restaurant from "./Restaurant";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/restaurant">
          <Restaurant />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;





// import React, { useEffect, useState } from "react";
// import Restaurant from "./Restaurant";
// import ReviewCard from "./ReviewCard"
// // import React from "react";
// // import { Switch, Route } from "react-router-dom";

// function App() {
//   const [reviews, setReviews] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:5555/reviews")
//     .then(respose => respose.json())
//     .then(setReviews)

//   }, [])

//   const [restaurants, setRestaurants] = useState([])

//   useEffect(() => {
//     fetch("http://localhost:5555/restaurants")
//     .then(respose => respose.json())
//     .then(setRestaurants)

//   }, [])



//     const reviewCards = reviews.map((review) =>{
//       return <ReviewCard key={review.id} review={review}/>
//     })

//     const restaurantCards = restaurants.map((restaurant) =>{
//       return <Restaurant key={restaurant.id} restaurant={restaurant}/>
//     })

//   return (
//   <div>
//     {restaurantCards}
//     <h1> Welcome to KRT Kitchen</h1>
//     <h2> A modern eatery specializing in American comfort food </h2>
//     {reviewCards}
//   </div>
//   )
// }

// export default App;
