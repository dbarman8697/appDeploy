const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://dwipayan:dwipayan@cluster0.jeu5ups.mongodb.net/"
);

module.exports = { connection };
