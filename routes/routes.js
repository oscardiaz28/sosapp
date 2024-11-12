import express from 'express'
import { login, signup } from '../controllers/authController.js'
import { crearComunidad } from '../controllers/comunidadController.js'
import { allUsers } from '../controllers/userController.js'

const router = express.Router()

router.post("/login", login)
router.post("/signup", signup)

router.post("/comunidades", crearComunidad)

router.get("/users", allUsers )


export default router