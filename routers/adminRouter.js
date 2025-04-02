const { Router } = require("express");

const adminRouter = Router();

const adminController = require("../controllers/adminController");
const upload = require("../middleware/imageUpload");

adminRouter.get("/adminDash", adminController.adminDash);

adminRouter.get("/form", adminController.formPage);
adminRouter.post("/form",upload,adminController.createMovie);

adminRouter.get("/movieTable",adminController.movieTable);
adminRouter.get("/delete/:id",adminController.deleteMovie);
adminRouter.get("/update/:id",adminController.updateMovie);

adminRouter.post("/update/:id",upload,adminController.editMovie);

module.exports = adminRouter;
