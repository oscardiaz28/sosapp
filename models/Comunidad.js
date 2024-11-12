import db from "../config/db.js"
import { DataTypes } from "sequelize"

export const Comunidad = db.define('comunidades', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    departamento: {
        type: DataTypes.STRING
    },
    provincia: {
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
    id_usuario: {
        type: DataTypes.INTEGER
    }
})