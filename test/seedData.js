const Poll = require('../lib/models/polls/Poll');
const Vote = require('../lib/models/votes/Vote');
const chance = require('chance').Chance();

const questions = [
  'do you like fruits?',
  'was today fun?', 
  'is the sky blue?', 
  'is banana bread awesome?',
  'does this work?'
];
const options = ['yes', 'no'];

const seedData = () => {
  return Promise.all(
    questions.map((question) => {
      return Poll.create({
        question: question,
        options: ['yes', 'no'],
        creator: 'email@email.com'
      });
    })
  )
    .then(polls => {
      return Promise.all(
        polls.map(poll => {
          return Promise.all([...Array(5)].map(() => {
            return Vote.create({
              username: chance.pickone(options),
              result: 2,
              pollId: poll._id
            });
          })
          );
        })
      );
    });
};
module.exports = seedData;
