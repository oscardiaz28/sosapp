import { Comunidad } from "../models/Comunidad.js"
import { Usuario } from "../models/Usuario.js"

const crearComunidad = async (req, res) => {
    const {id_usuario, nombre, descripcion, departamento, provincia, lat, lng, radio} = req.body

    const usuario = await Usuario.findOne({where: id_usuario})
    if(!usuario){
        return res.status(400).json({
            message: "El usuario no existe"
        })
    }

    const comunidadExistente = await Comunidad.findOne({where: {nombre, departamento, provincia} })

    if(comunidadExistente){
        return res.status(400).json({
            message: "La comunidad ya existe, crea otro nombre"
        })
    }

    try{    
        await Comunidad.create({
            nombre,
            descripcion,
            departamento,
            provincia,
            lat,
            lng,
            radio,
            id_usuario
        })

        res.json({
            msg: `Comunidad creada con exito`
        })
        
    }catch(error){
        console.log(error)
    }
    
}

export {
    crearComunidad
}