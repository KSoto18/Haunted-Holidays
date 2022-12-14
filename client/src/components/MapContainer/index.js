import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MARKERS } from '../../utils/queries';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {useState} from 'react'


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

  const [ selected, setSelected ] = useState({});
  
  const onSelect = location => {
    setSelected(location);
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
                lng: parseInt(location.longitude),
                name: location.location,
              }
            // console.log(locationObject);
              return (
              <Marker key={location._id} position={locationObject}
              onClick={() => onSelect(location)}
              />
              )
            })
         }
         
{
  
  selected.location &&
  (
    <InfoWindow
    position={selected.location}
    clickable = {true}
    onCloseClick ={() => setSelected({})}
    >
      
      <p>{selected.location}</p>
    </InfoWindow>
  )
}
          </GoogleMap>
        
     </LoadScript>
  )
}
export default MapContainer;