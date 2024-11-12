import generarJWT from "../helpers/generarJWT.js"
import { generarUUID } from "../helpers/generarUUID.js"
import { getHashPassword } from "../helpers/hashPassword.js"
import { Usuario } from "../models/Usuario.js"
import bcrypt from 'bcrypt'


const login = async (req, res) => {
    const {username, password} = req.body
    
    const usuario = await Usuario.findOne( { where: {username} } )

    if(!usuario){
        return res.status(400).json({
            message: "El usuario no existe"
        })
    }

    const validPassword = await bcrypt.compare(password, usuario.password)

    if( !validPassword ) return res.status(400).json({ message: "Contraseña incorrecta" })

    res.json({
        message: "Ha iniciado sesión correctamente",
        token: generarJWT(usuario.id, usuario.username)
    })
}

const signup = async  (req, res) => {

    let hashPass = ""
    const {full_name, dni, username, password} = req.body

    const usuario = await Usuario.findOne({ where: {dni} })

    if(usuario){
        return res.status(400).json({
            message: "El usuario ya existe"
        })
    }

    hashPass = await getHashPassword(password)

    try{

        await Usuario.create({
            user_id: generarUUID(),
            full_name,
            dni,
            username,
            password: hashPass,
            role: "citizen"
        })

        res.status(200).json({
            message: "El usuario ha sido registrado correctamente"
        })

    }catch(error){
        console.log(error)
    }
  
}

export {
    login,
    signup
}
