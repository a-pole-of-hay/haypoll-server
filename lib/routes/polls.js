const { Router } = require('express');
const Poll = require('../models/polls/Poll');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { question, options } = req.body;
    const creator = '1234';
    Poll
      .create({ question, options, creator })
      .then(poll => res.send(poll))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Poll 
      .find()
      .lean()
      .then(polls => res.send(polls))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    console.log('id!!', req.params);
    Poll
      .findById(id)
      .lean()
      .then(poll => res.send(poll))
      .catch(next);
  });
