const { default: mongoose } = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    thumbnail: String,
    description: String,
    rating: Number,
  },
  { timeStamps: true }
);

const movieModel = mongoose.model("movieModel", movieSchema);

module.exports = movieModel;
