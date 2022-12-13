import React from 'react';
import { useQuery } from '@apollo/client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40, lng: -100
  }

  const spookyMarkers = {

    
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDDij4cxj3hedeOOwizEz0KFBgxhFSko_E'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={defaultCenter}
        />
     </LoadScript>
  )
}
export default MapContainer;