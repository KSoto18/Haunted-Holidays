import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
​
export const MapContainer = () => {
  
  const locations = [];
    
  
  
  return (
  
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(location => {
              return (
              <Marker key={location.location}/>
              )
            })
         }
     </GoogleMap>
  )
}