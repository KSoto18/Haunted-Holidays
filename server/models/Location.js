const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {

    city: {
      type: String,
      unique: false,
      trim: true
    },

    country: {
        type: String,
        unique: false,
        trim: true
      },

    description: {
      type: String,
      trim: true
    },

    location: {
        type: String,
        trim: true
      },
    
    state: {
        type: String,
        trim: true
      },

    state_abbrev: {
        type: String,
        max: 2
    },

    longitude: {
        type: String,
        
    },

    latitude: {
        type: String,
        
    },

    city_latitude: {
        type: String,
       
    },

    city_longitude: {
        type: String,
        
    },
    
  }
);

const Location = model('Location', locationSchema);

module.exports = Location;
