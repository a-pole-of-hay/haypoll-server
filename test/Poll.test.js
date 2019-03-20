const mongoose = require('mongoose');
const connect = require('../utils/connect');
const Poll = require('../lib/models/polls/Poll');

describe('Poll model', () => {
  beforeEach(() => connect());

  beforeEach(() => mongoose.connection.dropDatabase());

  afterAll(done => mongoose.connection.close(done));

  it('creates a poll', () => {
    return Poll
      .create({
        question: 'How is life?',
        options: ['good', 'bad', 'ugly']
      })
      .then(poll => {
        expect(poll.toJSON()).toEqual({
          question: 'How is life?',
          options: ['good', 'bad', 'ugly'],
          _id: poll._id,
          __v: 0
        });
      });
  });
});
