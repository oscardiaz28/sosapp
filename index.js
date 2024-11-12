import express from 'express'
import router from './routes/routes.js'
import morgan from 'morgan'
import cors from 'cors'
import db from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

db.authenticate()
    .then( () => {
        console.log("Base de datos conectada")
    } )
    .catch( (error) => {
        console.log("Error en la conexion, " + error.message)
    })

//middleware para manejar solicitudes json
app.use(express.json())
//middleware para manejar solicitudes enviadas por un form
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('dev'))


app.use("/api", router)

app.use( (req, res, next) => {
    res.status(400).json({
        message: "Ruta no definida"
    })
})

app.listen(PORT, () => {
    console.log(`El servidor ha iniciado en http://localhost:${PORT}/api`)
})