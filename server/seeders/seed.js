const db = require('../config/connection');

const userSeeds = require('./userSeeds.json');
const locationData = require('./locationsJSON.json');


const { User, Location } = require('../models');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Location.deleteMany({});

    await User.create(userSeeds);
    const locations = await Location.insertMany(locationData);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
