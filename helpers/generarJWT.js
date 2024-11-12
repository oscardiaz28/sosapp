import jwt from 'jsonwebtoken'

const generarJWT = (user_id, dni, username) => {
    return jwt.sign( {user_id, dni, username}, process.env.JWT_SECRET, { expiresIn: "30d" } )
}

export default generarJWT