require('dotenv').config();
require('./utils/connect');
const mongoose = require('mongoose');
const seedData = require('./test/seedData');

seedData(5)
  .then(() => console.log('done'))
  .catch(err => console.error(err))
  .finally(() => mongoose.connection.close());
