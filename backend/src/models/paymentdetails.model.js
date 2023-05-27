"use strict";
import bcrypt, { genSaltSync } from "bcrypt";
export default (sequelize, DataTypes) => {
  // Define a User model
  const Payment = sequelize.define("payment", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_number: {
      type: DataTypes.BIGINT,
      unique: true,
    },
    card_expire: {
      type: DataTypes.STRING,
    },
    card_cvv: {
      type: DataTypes.INTEGER,
    },
    payment_address: {
      type: DataTypes.STRING,
    },
    payment_city: {
      type: DataTypes.STRING,
    },
    payment_state: {
      type: DataTypes.STRING,
    },
    zipcode: {
      type: DataTypes.INTEGER,
    },
  });
  return Payment;
};
