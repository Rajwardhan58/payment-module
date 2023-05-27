"use strict";
import express from "express";

// ------------ Express Application
const app = express();

// ------------ Database Connection
import "./models/index.js";

// ------------ Application Configuration
import cors from "cors";
app.use(cors());
app.use(express.json());

// ------------ Application Routes
import _ from "./routes/index.js";

app.use("/", _);

app.all("*", (req, res) => {
  res.status(404).send(`${req.path} Path Not Found`);
});

// ------------ Application listen
app.listen(3000, () => {
  console.log(`server running...`);
});
