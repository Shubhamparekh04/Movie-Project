const { Router } = require("express");

const indexRouter = Router();

const movieRouter = require("./moviesRouters");
const adminRouter = require("./adminRouter");

indexRouter.use("/", adminRouter);
indexRouter.use("/", movieRouter);

module.exports = indexRouter;
