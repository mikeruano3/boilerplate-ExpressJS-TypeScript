
async function findOne (req:any, res:any) {
  try{
    return res.json('OK')
  }catch(err){
    return res.status(400).json(err)
  }
}

export default {
    findOne
}