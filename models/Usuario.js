import db from "../config/db.js";
import { DataTypes } from "sequelize";

export const Usuario = db.define('usuarios', {
    fullname: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

