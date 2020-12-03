const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Exercise", exerciseSchema);
