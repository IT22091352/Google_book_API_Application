const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Register = require('./Model/Register'); // Import the Register model

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

mongoose.connect("mongodb+srv://Admin_book:mtQW0XNnG3iDeMOH@cluster0.uaa4e5k.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await Register.create({
      name,
      email,
      password,
    });
    res.send({ status: "Ok" });
  } catch (err) {
    res.send({ status: "err" });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Register.findOne({ email, password });
    if (!user) {
      return res.json({ err: "Invalid credentials" });
    } 
    if (user.password === password) {
      return res.json({ status: "Ok" });
    } else {
      return res.json({ err: "Incorrect password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Server error" });
  }
});