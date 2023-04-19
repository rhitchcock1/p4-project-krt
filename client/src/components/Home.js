import React from "react";
import KRT_KITCHEN from "../images/KRT_KITCHEN.png"

function Home() {
  return (
    <>
     <img src={KRT_KITCHEN} />
     <div>
        <h1>North</h1>
        <h3>123 North St</h3>
        <h3>Austin, TX</h3>
        <h5>000-000-0000</h5>
     </div>
     <div>
        <h1>South</h1>
        <h3>456 South Ave</h3>
        <h3>Austin, TX</h3>
        <h5>000-000-0000</h5>
     </div>
     <div>
        <h1>East</h1>
        <h3>789 East Sr</h3>
        <h3>Austin, TX</h3>
        <h5>000-000-0000</h5>
     </div>
     <div>
        <h1>West</h1>
        <h3>101 West Blvd</h3>
        <h3>Austin, TX</h3>
        <h5>000-000-0000</h5>
     </div>
    
   </>
  );
}

export default Home;