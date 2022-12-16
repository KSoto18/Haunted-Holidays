import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MARKERS } from '../../utils/queries';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Ghost from '../../assets/img/icons8-ghost-64.png'
import { useState } from "react";

const MapContainer = () => {
  const { loading, data } = useQuery(QUERY_MARKERS);
  // console.log(data?.locations[0]);

  const locations = data?.locations;


  const [selected, setSelected] = useState({});
  const [isOpen, setisOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [description, setDescription] = useState({});
  const [city, setCity] = useState({});
  const [state_abbrev, setState_abbrev] = useState({});

  const onSelect = (object, location) => {
    console.log(location);
    setSelected(object);
    setisOpen(true);
    setLocation(location);
    setDescription(description);

    setCity(city);
    setState_abbrev(state_abbrev);

  }

  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40, lng: -100
  }

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDDij4cxj3hedeOOwizEz0KFBgxhFSko_E'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={4}
        center={defaultCenter}>

        {
          locations?.map((location, index) => {
            const locationObject = {
              lat: parseInt(location.latitude),
              lng: parseInt(location.longitude),
            }

            return (
              <Marker key={index} position={locationObject}
                icon={Ghost} onClick={() => onSelect(locationObject, location)}
              />
            )
          })
        }
        {

          isOpen &&
          (
            <InfoWindow
              position={selected}
              clickable={true}
              onCloseClick={() => setisOpen(false)}
            >
              <div>

                <p className='location-name'>{location.location}</p>
                <p className='location-description'>{location.description}</p>
                <p>City: {location.city}, {location.state_abbrev}.</p>

              </div>
            </InfoWindow>
          )
        }

      </GoogleMap>

    </LoadScript>
  )
}

export default MapContainer;