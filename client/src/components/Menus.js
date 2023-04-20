import React from "react";
import Free_Drinks from "../images/Free_Drinks.png"
import Menu from "../images/Menu.png"




function Menus(){


    return(
        <>
      
        <div className="menus">
         <img className = "menui" src= {Free_Drinks} alt = "happy hour info"/>
         <br></br>
         <img className = "menui" src= {Menu} alt = "happy hour info"/>
         </div>
        </> 
    )
}

export default Menus

