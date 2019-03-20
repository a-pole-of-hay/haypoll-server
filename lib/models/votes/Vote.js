const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username created']
  },

  result: {
    type: Number
  },

  poll: {
    type: mongoose.Types.ObjectId,
    ref: 'Poll'
  }
});

module.exports = mongoose.model('Vote', voteSchema);
