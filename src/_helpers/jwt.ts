import expressJwt from "express-jwt"
import dotenv from "dotenv"
dotenv.config()

function jwt() {
    const secret = process.env.TOKEN_SECRET;
    return expressJwt({ secret, algorithms: [process.env.ALGORITHMS] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/auth/signin',
            /\/api\/auth*/
        ]
    });
}

export default {
    jwt
}