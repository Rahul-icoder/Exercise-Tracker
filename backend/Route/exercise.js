const express = require("express");
const router = express.Router();
const exercise = require("../models/Exercise");

router.post("/create_exercise", (req, res) => {
  const post = new exercise(req.body);
  post
    .save()
    .then(() => res.status(200).json("exercise created"))
    .catch((err) => res.status(404).json("Error : ", +err));
});

router.get("/exercise_list", (req, res) => {
  exercise
    .find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(404).json("Error: ", +err));
});

router.get("/exercise_list/:id", (req, res) => {
  exercise
    .findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(404).json("Error ", +err));
});
router.patch("/update/:id", (req, res) => {
  exercise
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send("update successful"))
    .catch((err) => res.send("Error : ", +err));
});

router.delete("/delete/:id", (req, res) => {
  exercise
    .findByIdAndDelete(req.params.id, req.body)
    .then(() => res.send("Exercise deleted "))
    .catch((err) => res.send("Error : ", +err));
});

module.exports = router;
