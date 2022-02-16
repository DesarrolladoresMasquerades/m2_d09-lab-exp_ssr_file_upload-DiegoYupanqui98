const router = require("express").Router();
const {isLoggedIn} = require("../../middleware/route-guard")

const fileUploader = require("../../config/cloudinary.config");
const UserModel = require("../../models/User.model");
/* GET home page */

router.get("/",isLoggedIn, (req, res, next) => {

  res.render("users/user-profile");
});

router.route("/edit")
.get((req,res)=>{
  res.render('users/edit-profile')
})
.post(fileUploader.single("imgUrl"), (req,res)=>{

  const id = req.session.user._id;
  const username = req.body.username;
  
  const imgUrl = req.file.path;

  UserModel.findByIdAndUpdate(id,{username, imgUrl},{new: true})
  .then(user => res.render("users/user-profile", {user: user}))
})

module.exports = router;
