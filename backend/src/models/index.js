"use strict"
import config from "config"
import { Sequelize, DataTypes } from "sequelize";

const db = {};

// Define the Sequelize configuration
const sequelize = new Sequelize(config.get('database.dbName'), config.get('database.userName'), config.get('database.password'), {
    host: config.get('database.host'),
    dialect: 'postgres', // specify the dialect as postgres
    logging: false, // disable logging of SQL queries (optional)
});

// Test the database connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the PostgreSQL database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize = Sequelize;
db.sequelize = sequelize;

import user from "./user.model.js";
import payment from "./paymentdetails.model.js";

db.user = user(sequelize, DataTypes);
db.payment = payment(sequelize, DataTypes);

db.sequelize.sync({ force: false });
console.log("All models were synchronized successfully.");

export default db;