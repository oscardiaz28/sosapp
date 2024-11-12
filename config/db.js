import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
});


export default db