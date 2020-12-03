const express = require("express");
const router = express.Router();
const user = require("../models/User");

router.post("/createuser", (req, res) => {
  const posts = new user(req.body);
  posts
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(404).json("Error : " + err));
});

router.get("/user_list", (req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status.json("Error : " + err));
});

module.exports = router;
