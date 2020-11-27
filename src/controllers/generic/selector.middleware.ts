import categorySchema from "../../schemas/category.schema";
import consignmentSchema from "../../schemas/consignment.schema";
import productSchema from "../../schemas/product.schema";
import roleSchema from "../../schemas/role.schema";
import salepriceSchema from "../../schemas/sale-price.schema";
import saleSchema from "../../schemas/sale.schema";
import userSchema from "../../schemas/user.schema";
import CS from "../../constants/schema.constants";

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
        case CS.CATEGORIES:
            return categorySchema
        case CS.CONSIGNMENTS:
            return consignmentSchema
        case CS.PRODUCTS:
            return productSchema
        case CS.ROLES:
            return roleSchema
        case CS.SALEPRICES:
            return salepriceSchema
        case CS.SALES:
            return saleSchema
        case CS.USERS:
            return userSchema
        default:
          return null
    }
}

export default { findSchema }