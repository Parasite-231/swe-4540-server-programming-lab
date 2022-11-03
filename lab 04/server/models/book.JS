const mongoose = require("mongoose");

const bookList = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    default: Date.now,
  },
});

module.exports = bookList;