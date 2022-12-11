const { Schema, model } = require('mongoose');

const locationSchema = new Schema(
  {
    id: {
        type: String,
        unique: true
    },

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
      required: true,
      trim: true
    },

    location: {
        type: String,
        required: true,
        trim: true
      },
    
    state: {
        type: String,
        required: true,
        trim: true
      },

    state_abbrev: {
        type: String,
        required: true,
        max: 2
    },

    longitude: {
        type: String,
        required: true,
    },

    latitude: {
        type: String,
        required: true,
    },

    city_latitude: {
        type: String,
        required: true,
    },

    city_longitude: {
        type: String,
        required: true,
    },
    
  }
);

const Location = model('Location', locationSchema);

module.exports = Location;
