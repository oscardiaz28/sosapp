import { Usuario } from "../models/Usuario.js"

const allUsers = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll()

        return res.json({
            message: "Usuarios obtenidos",
            usuarios
        })
    }catch(error){
        console.log(error)
    }
    res.json({
        msg: "error"
    })
}

const perfil = async (req, res) => {

    const {dni} = req.usuario
    const usuario = await Usuario.findOne({where: {dni}, attributes: {exclude: ['password', 'user_id']}})

    if(!usuario){
        return res.status(400).json({
            message: "Usuarion no encontrado"
        })
    }

    res.json({
        usuario
    })

}

export {
    allUsers,
    perfil
}