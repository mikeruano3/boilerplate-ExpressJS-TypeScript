import { Router } from 'express'

const dataRouter = Router()

import dataCtrl from "../../controllers/generic/generic.controller"

dataRouter.get('/findone/:id',          dataCtrl.findOne)
dataRouter.get('/findall',              dataCtrl.findAll)
dataRouter.post('/findbyfilter',        dataCtrl.findByFilter)
dataRouter.post('/insert/',             dataCtrl.insertOne)
dataRouter.put('/update/',              dataCtrl.update)
dataRouter.delete('/delete/:id',        dataCtrl.deleteOne)

export default dataRouter