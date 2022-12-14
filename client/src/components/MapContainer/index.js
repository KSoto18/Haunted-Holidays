// Main Imports
import React from 'react';
import { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Query Import
import { useQuery } from '@apollo/client';
import { QUERY_MARKERS } from '../../utils/queries';

// Custom Marker Import for GoogleMaps
import Ghost from '../../assets/img/icons8-ghost-64.png'

const MapContainer = () => {
  const { loading, data } = useQuery(QUERY_MARKERS);
  const locations = data?.locations;

  // Setting State
  const [selected, setSelected] = useState({});
  const [isOpen, setisOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [description, setDescription] = useState({});

  // When a marker is selected it renders this
  const onSelect = (object, location) => {
    console.log(location);
    setSelected(object);
    setisOpen(true);
    setLocation(location);
    setDescription(description);
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
        zoom={5}
        center={defaultCenter}>

        {
          locations?.map((location, index) => {
            const locationObject = {
              lat: parseInt(location.latitude),
              lng: parseInt(location.longitude),
            }

            return (
              <Marker key={index} position={locationObject}
                icon={Ghost} onClick={() => onSelect(locationObject, location)}/>
            )
          })
        }

        {
          isOpen && (

            <InfoWindow
              position={selected}
              clickable={true}
              onCloseClick={() => setisOpen(false)}>

              <div>
                <p>ICON</p>
                <h1 style={{ color: "black" }}>{location.location}</h1>
                <p style={{ color: "black" }}>{location.description}</p>
              </div>

            </InfoWindow>
          )}
      </GoogleMap>
    </LoadScript>
  )}


export default MapContainer;