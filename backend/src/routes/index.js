"use strict";
import express from "express";
import db from "../models/index.js";

const userModel = db.user;
const paymentModel = db.payment;

const _ = express.Router();

_.route("/create-account").post((req, res) => {
  try {
    const body = req.body;
    const result = userModel.findOne({
      where: { email: body.email },
    });
    result.then((data) => {
      if (data) {
        return res.send({
          status: "failed",
          message: `email address already exists`,
        });
      } else {
        userModel.create(body);
        return res.send({
          status: "success",
          message: "successfully create account",
        });
      }
    });
  } catch (error) {
    return res.status(501).send({ status: "failed", message: error.message });
  }
});

_.route("/make-payment").post((req, res) => {
  try {
    const body = req.body;
    paymentModel.create(body);
    return res.send({
      status: "success",
      message: "successfully paid amount",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(501).send({ status: "failed", message: error.message });
  }
});

export default _;
