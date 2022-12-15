import React from "react";
import MapContainer from "../MapContainer";

const HauntedLocations = () => {
    return (

        <div className="hauntedloc-pg-container">
            <h3 className="hauntedloc-pgtitle">View our haunted locations</h3>
            <p className="hauntedloc-pg-subtitle">Select a ghoul to view the details of the haunted location.</p>


            <div className="hauntedloc-map-container">
                <div className='map-container'>
                    <MapContainer />
                </div>

            </div>
        </div>

    );
};

export default HauntedLocations;