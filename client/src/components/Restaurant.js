import { useState } from "react";
// import App from "client/src/components/App.js"


const RestaurantFront = ({ restaurant }) => {

    let loco = ''
    let num = ''
    const getAddy = (restaurant)=>{
        if (restaurant.location === "North") {
            loco = '123 North St, Austin, TX'
            num = '512-329-0000' 
        }
        if (restaurant.location === "South") {
            loco = '456 South Ave, Austin, TX' 
            num = '512-555-0005'
        }
        if (restaurant.location === "East") {
            loco = '789 East Sr, Austin, TX'
            num = '512-212-0500' 
        }
        if (restaurant.location === "West") {
            loco = '101 West Blvd, Austin, TX' 
            num = '512-347-5000'
        }
        
        

    }
    getAddy(restaurant)
    
 

    return (
        <div className="restaurantFront" style={{border: '5px solid grey'}}>
            <h1 style={{color: 'yellow'}}>{restaurant.location}</h1>
            <h4>{loco}</h4>
            <p>{num}</p>
            <div className="med" >
            <img src={restaurant.img} alt={restaurant.img} style={{border: '5px solid white'}}/>
            </div>
            <h2 style={{color: 'yellow'}}>{restaurant.name}</h2>
        </div>
    )
}



const RestaurantBack = ({ restaurant }) => {


    const fp = restaurant.reviews.map((review) => {
        return (
            <>
        <div className="restaurantBack"style={{border: '2px dotted yellow'}}>
        <h2>{review.review}</h2> 
        <h1 style={{color: 'yellow'}}>{review.rating}</h1>
        <div className='small'>
        <img src={review.img} alt={review.img}/>
        </div>
        <h4>{review.date}</h4>
        </div>

        </>
        )
    

    })
    
 

    return (
        <div className="restaurantBack">
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
        <div className = "rstuff" onClick={toggleFront} >
            {showFront ? <RestaurantFront restaurant={restaurant} /> : <RestaurantBack restaurant={restaurant} /> }
        </div>
    )
}

export default Restaurant
   