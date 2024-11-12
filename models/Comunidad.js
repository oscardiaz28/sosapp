import db from "../config/db.js"
import { DataTypes } from "sequelize"

export const Comunidad = db.define('community', {
    community_id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    department: {
        type: DataTypes.STRING
    },
    district: {
        type: DataTypes.STRING
    },
    province: {
        type: DataTypes.STRING
    },
    lat: {
        type: DataTypes.STRING
    },
    lng: {
        type: DataTypes.STRING
    },
    radio: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.UUID
    }
}, {
    tableName: 'community'
}

)