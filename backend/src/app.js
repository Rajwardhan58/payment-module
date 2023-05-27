"use strict";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const Address = process.env.ADDRESS;
const Port = process.env.PORT;

// ------------ Express Application
const app = express();

// ------------ Database Connection
import "./models/index.js";

// ------------ Application Configuration
import cors from "cors";
app.use(cors());
app.use(express.json());

// Allow cross-origin requests from specific domains
app.use(
  cors({
    origin: "http://localhost:3000", // specify the domain you want to allow
  })
);

// Allow cross-origin requests with custom configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"], // specify the HTTP methods you want to allow
    allowedHeaders: ["Content-Type", "Authorization"], // specify the headers you want to allow
  })
);

// ------------ Application Routes
import _ from "./routes/index.js";

app.use("/", _);

app.all("*", (req, res) => {
  res.status(404).send(`${req.path} Path Not Found`);
});

// ------------ Application listen
app.listen(Port, Address, () => {
  console.log(`server running on port : ${Port}`);
});
