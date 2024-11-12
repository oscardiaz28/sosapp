import jwt from 'jsonwebtoken'

const generarJWT = (id, username) => {
    return jwt.sign( {id, username}, process.env.JWT_SECRET, { expiresIn: "30d" } )
}

export default generarJWT