const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRoutes);

module.exports = app;
