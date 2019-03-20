require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');
const Poll = require('../lib/models/polls/Poll');
const connect = require('../utils/connect');

beforeAll(() => {
  return connect();
});
beforeEach(() => {
  return mongoose.connection.dropDatabase();
});
beforeEach(() => {
  return seedData(5);
});
afterAll(() => {
  return mongoose.connection.close();
});

const getPoll = () => {
  return Poll
    .findOne({ question: 'Do you like apples?' })
    .then(poll => {
      return JSON.parse(JSON.stringify(poll));
    });
};
module.exports = {
  getPoll
};
