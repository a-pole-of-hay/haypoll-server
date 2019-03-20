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
});

module.exports = mongoose.model('Poll', pollSchema);
