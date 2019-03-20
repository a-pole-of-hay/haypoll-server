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
  });
