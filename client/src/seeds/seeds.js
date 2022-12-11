const db = require('../../../server/config/connection');
const { Location } = require('../models');

const locationData = require('./hauntedPlacesJSON.json');

db.once('open', async () => {
  // clean database
  await Location.deleteMany({});
  

  // bulk create each model
  const locations = await Location.insertMany(locationData);

  console.log('all done!');
  process.exit(0);
});
