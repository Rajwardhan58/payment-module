"use strict"
import bcrypt, { genSaltSync } from "bcrypt"
export default (sequelize, DataTypes) => {
    // Define a User model
    const User = sequelize.define('payment', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        card_number: {
            type: DataTypes.BIGINT,
            unique: true,
            validate: {
                isNumeric: true,
                min: 16,
                max: 19
            }
        },
        card_expire: {
            type: DataTypes.STRING,
        },
        card_cvv:{
            type:DataTypes.INTEGER,
            validate:{
                isNumberic:true,
                max:3,
                min:3
            }
        },
        payment_address:{
            type:DataTypes.STRING,
        },
        payment_city:{
            type:DataTypes.STRING
        },
        payment_state:{
            type:DataTypes.STRING
        },
        zipcode:{
            type:DataTypes.INTEGER
        }
    });
}