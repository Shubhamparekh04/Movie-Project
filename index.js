const express = require("express");
const port = 8089;
const path = require("path");

const app = express();
const indexRouter = require("./routers/indexRouter");
const db = require("./configs/database");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Adjust the folder name if needed

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/", indexRouter);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Server runs on:\nhttp://localhost:" + port || 3000);
  }
});
