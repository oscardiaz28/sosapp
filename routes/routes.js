import express from 'express'
import { login, signup } from '../controllers/authController.js'
import { allComunidades, crearComunidad, userComunidades } from '../controllers/comunidadController.js'
import { allUsers, perfil } from '../controllers/userController.js'
import { checkAuth } from '../middlewares/authMiddleware.js'

const router = express.Router()

//Public
router.post("/login", login)
router.post("/signup", signup)
router.get("/users", allUsers )
router.post("/all-comunidades", allComunidades)


//Private
router.get("/comunidades", checkAuth, userComunidades)
router.post("/comunidades", checkAuth, crearComunidad)
router.get("/perfil", checkAuth, perfil)


export default router