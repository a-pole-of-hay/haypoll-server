require('../dataHelpers');
const app = require('../../lib/app');
const request = require('supertest');

describe('polls routes', () => {
  it('creates a new poll when posted to', () => {
    return request(app)
      .post('/polls')
      .send({ question: 'do you like polls?', options:['yes', 'no'], creator: '1234' })
      .then (res => {
        expect(res.body).toEqual({
          question: 'do you like polls?', 
          options:['yes', 'no'],
          creator: '1234',
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
});
