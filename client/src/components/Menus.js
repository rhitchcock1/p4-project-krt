import React from "react";
import Free_Drinks from "../images/Free_Drinks.png"

function Menus(){

    return(
        <>
        <h1> Menu Page </h1>
        <select >
            <option value = "lunch">Lunch Menu</option>
            <option value = "dinner"></option>
            <option value = "brunch">Brunch Menu</option>
        </select>
         <img src= {Free_Drinks} />
        </>
    )
}

export default Menus