const movieModel = require("../models/movieSchema");
const fs = require("fs");

module.exports.adminDash = (req, res) => {
  return res.render("pages/adminDash");
};

module.exports.formPage = (req, res) => {
  return res.render("pages/form");
};

module.exports.createMovie = async (req, res) => {
  try {
    await movieModel.create({ ...req.body, thumbnail: req.file.path });
    console.log("Data Added successfully...!");
    res.redirect("/form");
  } catch (error) {
    console.log(error.message);
    res.redirect("/form");
  }
};

module.exports.movieTable = async (req, res) => {
  try {
    const moviesData = await movieModel.find({});
    if (moviesData) {
      return res.render("pages/table", { moviesData });
    } else {
      return res.render("pages/table", { moviesData: {} });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findByIdAndDelete(id);

    if (movie) {
      fs.unlinkSync(movie.thumbnail);
    }

    console.log("Movie deleted successfully...!");
    res.redirect("/movieTable");
  } catch (error) {
    console.log(error.message);
    res.redirect("/movieTable");
  }
};

module.exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findById(id);
    res.render("pages/edit", { movie });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.editMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.findById(id);
    let updateData = { ...req.body };

    if (req.file.path) {
      if (movie.thumbnail) fs.unlinkSync(movie.thumbnail);
      updateData.thumbnail = req.file.path;
    } else {
      updateData.thumbnail = req.body.old_thumbnail;
    }
    await movieModel.findByIdAndUpdate(id, updateData);
    res.redirect("/movieTable");
  } catch (error) {
    console.log(error.message);
    res.redirect("/movieTable");
  }
};
