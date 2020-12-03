const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");

const route_user = require("./Route/user");
const route_exercise = require("./Route/exercise");

require("dotenv").config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017/CrudDB";
//  process.env.Atlas_Uri;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully ");
});

app.use("/user", route_user);
app.use("/exercise", route_exercise);

app.listen(port, () => console.log(`Server is running on  port: ${port}`));
