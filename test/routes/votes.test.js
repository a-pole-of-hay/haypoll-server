require('../dataHelpers');
const app = require('../../lib/app');
const request = require('supertest');

describe('votes routes', () => {
  it('create new vote route', () => {
    return request(app)
      .post('/votes')
      .send({ username: '1234', result: 2 })
      .then(res => {
        expect(res.body).toEqual({
          username: '1234', 
          result: 2, 
          __v: 0,
          _id: expect.any(String)
        });
      });
  });
});
