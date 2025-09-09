const { campgroundSchema, reviewSchema } = require("./schemas.js");
const ExpressError = require('./Utilities/ExpressError.js')
const Campground = require("./models/campground");
const Review = require('./models/review.js')

module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
      res.locals.returnTo = req.session.returnTo;
  }
  next();
} 

// validate campground middleware
module.exports.validateCampgound = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(","); // el => eachelement
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
  // console.log(error);
};


// validate Review middleware
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(","); // el => eachelement
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};


// loggedIn middleware
module.exports.isLoggedIn = (req, res, next) => {
  
    if (!req.isAuthenticated()) {
      req.session.returnTo = req.originalUrl;
      req.flash("error", "Login or Signup first!");
      return res.redirect("/login");
    }
    next();
}



// Authorized author campgorund middleware
module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground.author.equals(req.user._id)) {
    req.flash('error', 'Permission denied!');
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
};

// Authorized author review middleware
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash('error', 'Permission denied!');
    return res.redirect(`/campgrounds/${id}`);
  }
  next();
};