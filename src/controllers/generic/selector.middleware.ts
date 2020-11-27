import roleSchema from "../../schemas/role.schema";
import userSchema from "../../schemas/user.schema";

async function findSchema(req:any, res:any, next:any) {
    try{
        if(!req.params.schemaId){
            return res.status(400).json({status: false, message: 'No se encontró un esquema en el URL'})
        }
        const schema = await selectSchema(req.params.schemaId)
        if(schema == null){
          return res.status(400).json({status: false, message: `No se encuentra ningun esquema con el nombre ${req.params.schemaId}`})
        }else{
          req.schema = schema
          next()
        }
    }catch(err){
        return res.status(400).json({status: false, message: err})
    }
}

async function selectSchema(schemaId:string) {
    switch (schemaId) {
        case 'users':
            return userSchema
        case 'roles':
            return roleSchema
        default:
          return null
    }
}

export default { findSchema }