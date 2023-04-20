import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function Location(){
   
    const [selectedElement, setSelectedElement] = useState(null)
    const [showInfoWindow, setInfoWindowFlag] = useState(true);
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey:"AIzaSyDYBi02LqFbjqIoS9vm-1f_R53wzEh5im8"
        });
        const mapRef = React.useRef();
        const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
        }, []);
        if(loadError) return "Error";
        if(!isLoaded) return "Maps";

        const containerStyle = {
            width: '900px',
            height: '900px'
         }; // Use any size you want!

         const center = {
            lat: 30.266666,
            lng: -97.733330,
         } // This is New York City


    return (
        <div>
        <div className = "maps">
        <GoogleMap
     mapContainerStyle={containerStyle}
     center={center}
     zoom={11}
     onLoad={onMapLoad}
    //  onClick={onMapClick}

  >
  
      <Marker
        //  key={markers.time.toISOString()}
        icon={{
            url: "https://img.icons8.com/3d-fluency/94/null/hamburger.png",
            scaledSize: new window.google.maps.Size(60,60),
            anchor: new window.google.maps.Point(5, 5)
        }}
         position={{lat: 30.3923, lng: -97.7082}}
         onClick={()=>{setSelectedElement()}}
         >
        
          <InfoWindow 
          position={{lat: 30.3923, lng: -97.7082}} 
           >
           <div>
             <h1>NORTH!!</h1>
           </div>
           </InfoWindow>
          
      </Marker>
      <Marker
        //  key={markers.time.toISOString()}
        icon={{
            url: "https://img.icons8.com/3d-fluency/94/null/hamburger.png",
            scaledSize: new window.google.maps.Size(60,60),
            anchor: new window.google.maps.Point(5, 5)
        }}
         position={{lat: 30.2030, lng: -97.8067}}
      >
            <InfoWindow 
          position={{lat: 30.2030, lng: -97.8067}}
           >
           <div>
             <h1>NORTH!!</h1>
           </div>
           </InfoWindow>
      </Marker>
      <Marker
        //  key={markers.time.toISOString()}
        icon={{
            url: "https://img.icons8.com/3d-fluency/94/null/hamburger.png",
            scaledSize: new window.google.maps.Size(60,60),
            anchor: new window.google.maps.Point(5, 5)
        }}
         position={{lat: 30.2655, lng: -97.7091}}
      >
         <InfoWindow 
          position={{lat: 30.2655, lng: -97.7091}}
           >
           <div>
             <h1>NORTH!!</h1>
           </div>
           </InfoWindow>
      </Marker>
      <Marker
        //  key={markers.time.toISOString()}
        icon={{
            url: "https://img.icons8.com/3d-fluency/94/null/hamburger.png",
            scaledSize: new window.google.maps.Size(60,60),
            anchor: new window.google.maps.Point(255, 5)
        }}
         position={{lat: 30.2955, lng: -97.7551}}
      >
          <InfoWindow 
    position={{lat: 30.2852, lng: -97.8692}}
           >
           <div>
             <h1>NORTH!!</h1>
           </div>
           </InfoWindow>
       
      </Marker>

  
    </GoogleMap>
    </div>
    </div>
    )
}


export default Location