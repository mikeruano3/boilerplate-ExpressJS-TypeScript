import { Router } from 'express'
import genericRoute from "./route/generic.route"
import authRoute from "./route/auth.route"
import schemaSelector from "../controllers/generic/selector.middleware";
const routes = Router()

routes.use('/api/auth',  authRoute)
routes.use('/api/collections/:schemaId', schemaSelector.findSchema, genericRoute)

export default routes