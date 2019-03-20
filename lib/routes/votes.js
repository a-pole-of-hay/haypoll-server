const { Router } = require('express');
const Vote = require('../models/votes/Vote');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { username, result, poll } = req.body;
    Vote
      .create({ username, result, poll }) 
      .then(vote => res.send(vote))
      .catch(next);
  });
