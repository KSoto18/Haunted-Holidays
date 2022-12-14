import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MARKERS } from '../../utils/queries';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';




const MapContainer = () => {
  const { loading, data } = useQuery(QUERY_MARKERS);
  // console.log(data?.locations[0]);

  const [selected, setSelected] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [description, setDescription] = useState({});

  const onSelect = (object, location) => {
    setSelected(object);
    setIsOpen(true);
    setLocation(location);
    setDescription(description);
    console.log(location);
  }

  const locations = data?.locations;



  const mapStyles = {
    height: "80vh",
    width: "80%"
  };

  const defaultCenter = {
    lat: 27.64891, lng: -81.550255
  }



  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDDij4cxj3hedeOOwizEz0KFBgxhFSko_E'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={5}
        center={defaultCenter}>

        {
          locations?.map(location => {
            const locationObject = {
              lat: parseInt(location.latitude),
              lng: parseInt(location.longitude),
              name: location.location
            }

            // console.log(locationObject)
            
            return (
              <Marker key={location._id} position={locationObject}
                onClick={() => onSelect(locationObject, location)} />
                
            )
      
          })
        }

        {

          isOpen &&


          <InfoWindow
            position={selected}
            clickable={true}
            onCloseClick={() => setIsOpen(false)}>
            <div>
            <p style={{color: "black"}}>{location.location}</p>
            <p style={{color: "black"}}>{location.description}</p>
            </div>
            
          </InfoWindow>


        }

      </GoogleMap>

    </LoadScript>
  )
}
export default MapContainer;