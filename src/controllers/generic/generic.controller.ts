
async function findOne (req:any, res:any) {
  try{
    return res.json(await req.schema.findOne({"_id": req.params.id}))
  }catch(err){
    return res.status(400).json(err)
  }
}

async function findAll (req:any, res:any) {
  try{
    return res.json(await req.schema.find());
  }catch(err){
    return res.status(400).json(err)
  }
}

async function findByFilter (req:any, res:any){
  try{
    return res.json( await req.schema.find(
                req.body.query, req.body.projection
              ).sort(req.body.sort)
              .populate(req.body.populate)
              .populate(req.body.populate2)
              .populate(req.body.populate3)
              .limit(req.body.limit)
              .skip(req.body.skip)
            )
  }catch(err){
    return res.status(400).json(err)
  }
}

async function insertOne (req:any, res:any) {
  try{
    const item = new req.schema(req.body);
    const result = await item.save();
    return res.json(result);
  }catch(err){
    return res.status(400).json(err)
  }
}

async function update (req:any, res:any) {
  try{
    const result = await req.schema.updateOne(
      req.body.query,
      req.body.data
    )
    return res.json(result)
  }catch(err){
    return res.status(400).json(err)
  }
}

async function deleteOne (req:any, res:any) {
  try{
    const result = await req.schema.findByIdAndDelete({"_id": req.params.id});
    return res.json(result);
  }catch(err){
    return res.status(400).json(err)
  }
}

export default {
    findOne,
    findAll,
    findByFilter,
    insertOne,
    update,
    deleteOne
}