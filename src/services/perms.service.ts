import dotenv from "dotenv"
dotenv.config()
import roleSchema from "../schemas/role.schema"

async function verifyPermissions (req:any, res:any, next:any) {

    if(req.tokenData.idRole){
        const roleData = await roleSchema.findOne({_id: req.tokenData.idRole})
        return next()
    }
    return res.status(403).json({status:false, message: "Forbidden", data: "Usuario sin permisos para esta acción"})
}

export default {
    verifyPermissions
}