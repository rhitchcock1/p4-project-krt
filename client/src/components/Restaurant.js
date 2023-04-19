import { useState } from "react";
// import App from "client/src/components/App.js"


const RestaurantFront = ({ restaurant }) => {
    
 

    return (
        <div>
            <h1>{restaurant.location}</h1>
            <div className="med" >
            <img src={restaurant.img} alt={restaurant.img}/>
            </div>
            <h2>{restaurant.name}</h2>
        </div>
    )
}



const RestaurantBack = ({ restaurant }) => {


    const fp = restaurant.reviews.map((review) => {
        return (
            <>
        <h2>{review.review}</h2> 
        <h1>{review.rating}</h1>
        <div className='small'>
        <img src={review.img} alt={review.img}/>
        </div>
        <h4>{review.date}</h4>

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
   