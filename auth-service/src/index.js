require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth service listening on ${PORT}`));
