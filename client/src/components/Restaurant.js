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
            <div>{fp}</div>
            <p>No more Reviews! Have a Great day!</p>
        

        </div>
    )
}


function Restaurant({restaurant}){

    const [showFront, setShowFront] = useState(true)

    const toggleFront = () => {
        setShowFront(showFront => !showFront)
    }

    return (
        <div onClick={toggleFront} >
            {showFront ? <RestaurantFront restaurant={restaurant} /> : <RestaurantBack restaurant={restaurant} /> }
        </div>
    )
}

export default Restaurant
   