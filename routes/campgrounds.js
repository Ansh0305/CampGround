const express = require("express");
const router = express.Router();
const catchAsync = require("../Utilities/AsyncCatch");
const { isLoggedIn, isAuthor, validateCampgound } = require("../middleware");
const multer = require("multer");
const {storage} = require('../cloudinary/index')
const upload = multer({ storage });


const Campground = require("../models/campground");
const campgrounds = require("../controllers/campgrounds");

// routes starting with '/'
router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(
    isLoggedIn,
    upload.array("image"),
    validateCampgound,
    catchAsync(campgrounds.createCampground)
  );

// Standalone route(no same routes)
router.get("/new", isLoggedIn, campgrounds.renderNewForm);

// routes starting with '/:id'
router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validateCampgound,
    catchAsync(campgrounds.updateCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

// Standalone route(no same routes)
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.editCampground)
);

module.exports = router;
