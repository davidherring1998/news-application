const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = express();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}.`));
