const mongoose = require('mongoose');
const connect = require('../../utils/connect');
const Poll = require('../../lib/models/polls/Poll');
const Vote = require('../../lib/models/votes/Vote');

describe('Vote model', () => {
  beforeEach(() => connect());

  beforeEach(() => mongoose.connection.dropDatabase());

  afterAll(done => mongoose.connection.close(done));

  it('creates a vote', () => {
    return Poll
      .create({
        question: 'How is life?',
        options: ['good', 'bad', 'ugly'],
        creator: '1234'
      })
      .then(poll => Vote.create({
        username: 'shabster',
        result: 2,
        poll: poll._id
      }))
      .then(vote => expect(vote.toJSON()).toEqual({
        username: 'shabster',
        result: 2,
        poll: expect.any(Object),
        _id: expect.any(Object),
        __v: 0
      }));

  });
});
