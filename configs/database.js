const { default: mongoose } = require("mongoose");

require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected...!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
