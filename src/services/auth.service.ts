import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

async function generateToken(data:any) {
    // create a jwt token that is valid for 7 days
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRING_TIME })
}

async function verifyToken(req:any, res:any, next:any) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(401).json({status:false, message: 'No token', data: 'Unauthorized'}) // if there isn't any token
    jwt.verify(token, process.env.TOKEN_SECRET, {
        ignoreExpiration: true // handled by OAuth2 server implementation
    }, (err:any, data:any) => {
      if (err) return res.status(401).json({status:false, message: err.message, data: err})
      req.tokenData = data
      // ! NO BORRAR LO DE ABAJO
      next() // pass the execution off to whatever request the client intended
    })
}

export default {
    generateToken,
    verifyToken
}