import { Router } from 'express'
import genericRoute from "./route/generic.route"

const routes = Router()

routes.use('/api/collections/:schemaId', genericRoute)

export default routes