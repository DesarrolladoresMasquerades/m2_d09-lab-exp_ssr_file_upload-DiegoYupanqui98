const router = require("express").Router();
const {isLoggedIn} = require("../middleware/route-guard")
const PostModel = require("../models/Post.model");
/* GET home page */
router.get("/", isLoggedIn,(req, res, next) => {
  PostModel.find()
  .then(posts=> res.render("index", {posts}))
});

module.exports = router;
