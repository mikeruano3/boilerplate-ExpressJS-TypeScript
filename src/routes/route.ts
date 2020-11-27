import { Router } from 'express'
import genericRoute from "./route/generic.route"
import authRoute from "./route/auth.route"
import schemaSelector from "../controllers/generic/selector.middleware";
import authService from "../services/auth.service";
import permService from "../services/perms.service";
const routes = Router()

routes.use('/api/auth',  authRoute)
routes.use('/api/collections/:schemaId', authService.verifyToken, schemaSelector.findSchema, genericRoute)

export default routes