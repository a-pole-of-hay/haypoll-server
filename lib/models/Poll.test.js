const Poll = require('./Poll');

describe('Poll model', () => {
  it('creates a poll', () => {
    Poll
      .create({
        question: 'How is life?',
        options: ['good', 'bad', 'ugly'],
        votes: '1234'
      })
      .then(poll => expect(poll).toEqual({
        question: 'How is life?',
        options: ['good', 'bad', 'ugly'],
        votes: '1234',
        _id: expect.any(Object),
        __v: 0
      }));
  });
});
