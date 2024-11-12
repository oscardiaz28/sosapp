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

export {
    allUsers
}