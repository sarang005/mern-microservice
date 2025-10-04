const express = require("express");
const routes = require("./routes");
const proxy = require("./proxy");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", routes);

// Proxy middleware for forwarding requests to microservices
app.use(proxy);

module.exports = app;
