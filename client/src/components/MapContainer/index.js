import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MARKERS } from '../../utils/queries';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Ghost from '../../assets/img/icons8-ghost-64.png'

const MapContainer = () => {
  const { loading, data } = useQuery(QUERY_MARKERS);
// console.log(data?.locations[0]);

const locations = data?.locations;

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
          center={defaultCenter}>

{/* <Marker key={"test"} position={{lat: 42.9621061, lng: -85.50489309999999}}/> */}

             {
            locations?.map(location => {
              const locationObject = {
                lat: parseInt(location.latitude),
                lng: parseInt(location.longitude)
              }
              return (
              <Marker key={location.location} position={locationObject}
              icon={Ghost}
              />
              )
            })
         }

          </GoogleMap>
        
     </LoadScript>
  )
}
export default MapContainer;