import React, { useState } from "react";
import Free_Drinks from "../images/Free_Drinks.png"
import drink_back from "../images/drink_back.png"
import Menu from "../images/Menu.png"
import lunch_menu from "../images/lunch_menu.png"
import lunch_back from "../images/lunch_back.png"




function Menus(){
  const [showDrink, setShowDrink] = useState(true)

    const toggleDrink = () => {
        setShowDrink(showDrink => !showDrink)
    }
  const [showLunch, setShowLunch] = useState(true)

    const toggleLunch = () => {
        setShowLunch(showLunch  => !showLunch )
    }


    return(
        <>
        
        <div className="menus">
         <img className = "menui" src= {Free_Drinks} alt = "happy hour info"/>
         </div>
         <br></br>
         <div onClick={toggleDrink} >
         {showDrink ? <img className = "menui" src= {drink_back} alt = "happy hour info"/> : <img className = "menui" src= {Menu} alt = "happy hour info"/> }
         </div>
         <br></br>
         <div onClick={toggleLunch} >
         {showLunch ? <img className = "menui" src= {lunch_back} alt = "happy hour info"/> : <img className = "menui" src= {lunch_menu} alt = "happy hour info"/> }
         </div>
        
        </> 
    )
}

export default Menus

