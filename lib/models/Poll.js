const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question required']
  },

  options: {
    type: Array,
    required: [true, 'Options required']
  },

  votes: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Votes'
  }
});

module.exports = mongoose.model('Poll', pollSchema);
