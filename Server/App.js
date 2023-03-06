const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

// initializing express
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Starting the port
app.listen(PORT, () => console.log(`Server connected to port: ${PORT}.`));
