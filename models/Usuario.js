import db from "../config/db.js";
import { DataTypes } from "sequelize";

export const Usuario = db.define('user', {
    user_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    full_name: {
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
    },
    role: {
        type: DataTypes.STRING
    }
    
}, {
    tableName: 'user'
    }
)

