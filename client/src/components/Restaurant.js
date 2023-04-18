import { useState } from "react";
// import App from "client/src/components/App.js"


const RestaurantFront = ({ restaurant }) => {
    
 

    return (
        <div>
            <h1>{restaurant.location}</h1>
            <h2>{restaurant.name}</h2>
        </div>
    )
}



const RestaurantBack = ({ restaurant }) => {


    const fp = restaurant.reviews.map((review) => {
        return (
            <>
        <h1>{review.review}</h1> 
        <h2>{review.rating}</h2>
        <h2>{review.img}</h2>
        <h2>{review.date}</h2>

        </>
        )
    

    })
    
 

    return (
        <div>
            <h1>{fp}</h1>
            {/* <h2>{review.rating}</h2>
            <h2>{review.img}</h2>
            <h2>{review.date}</h2> */}

        </div>
    )
}


function Restaurant({restaurant}){

    return (
        <div>Front
            <RestaurantFront restaurant={restaurant} />  & back
            <RestaurantBack restaurant={restaurant} />
        </div>
    )
}

export default Restaurant
   