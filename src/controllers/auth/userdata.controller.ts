import md5 from "md5"
import userSchema from "../../schemas/user.schema"
import dotenv from "dotenv"
dotenv.config()

async function updateAppUser (req:any, res:any) {
    try{
        if (req.body.password) {
            req.body.password = md5(req.body.password)
        }
        const result = await userSchema.updateOne(
            {"_id": req.params.id},
            { $set: req.body}
        )
        return res.status(200).json({ status: true, message: "OK", data: result })
    }catch(err){
      return res.status(400).json(err)
    }
}

export default {
    updateAppUser
}