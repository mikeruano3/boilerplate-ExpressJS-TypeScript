import { Router } from 'express';

const dataRouter = Router()

import dataCtrl from "../../controllers/generic.controller";

dataRouter.get('/findone/:id',  dataCtrl.findOne)

export default dataRouter