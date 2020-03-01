const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const users = require("./routes/users");
const posts = require("./routes/posts");

// Setup enviroment
require("dotenv").config();

// Server PORT
const PORT = process.env.PORT;
const uri = process.env.MONGODB_URI;

// mongo DB connect
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfuly");
});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // html file for all routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
