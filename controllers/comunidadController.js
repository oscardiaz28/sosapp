import { generarUUID } from "../helpers/generarUUID.js"
import { uuidToBuffer } from "../helpers/uuidToBuffer.js"
import { Comunidad } from "../models/Comunidad.js"
import { Usuario } from "../models/Usuario.js"

const crearComunidad = async (req, res) => {
    const {user_id, dni} = req.usuario
    const {name, address, description, department, district, province, lat, lng, radio} = req.body

    const usuario = await Usuario.findOne({where: {dni} })
    if(!usuario){
        return res.status(400).json({
            message: "El usuario no existe"
        })
    }

    const comunidadExistente = await Comunidad.findOne({where: {name, department, province, district} })

    if(comunidadExistente){
        return res.status(400).json({
            message: "La comunidad ya existe, crea otro nombre"
        })
    }

    try{    
        await Comunidad.create({
            community_id: generarUUID(),
            address,
            name,
            description,
            department,
            district,
            province,
            lat,
            lng,
            radio,
            user_id: uuidToBuffer(user_id)
        })

        res.json({
            msg: `Comunidad creada con exito`
        })
        
    }catch(error){
        console.log(error)
    }
    
}

const allComunidades = (req, res) => {
    const {lat, lng} = req.body

    

    res.json({
        msg: "Todas las comunidades"
    })

}


const userComunidades = () => {

}

export {
    crearComunidad,
    allComunidades,
    userComunidades
}