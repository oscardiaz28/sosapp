import jwt from 'jsonwebtoken'
import { Usuario } from '../models/Usuario.js'
import { bufferToUUID } from '../helpers/bufferToUUID.js'

const checkAuth = async (req, res, next) => {

    let token = req.headers['authorization']

    if( !token || !token.startsWith("Bearer") ){
        return res.status(400).json({
            message: "Autenticacion requerida, porfavor inicie sesión"
        })
    }

    token = token.split(" ")[1]

    try{
        const {dni, username} = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await Usuario.findOne({ where: {dni}, attributes: {exclude: ['password']} })

        const dto = {
            user_id: bufferToUUID(usuario.user_id),
            full_name: usuario.full_name,
            dni: usuario.dni,
            username: usuario.username,
            rol: usuario.role
        }

        req.usuario = dto

        next()

    }catch(error){
        res.status(400).json({
            message: "Token no valido"
        })
    }

}

export {
    checkAuth
}