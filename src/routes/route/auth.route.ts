import { Router } from 'express';

const dataRouter = Router()

import dataCtrl from "../../controllers/auth/auth.controller"

dataRouter.post('/signin',                  dataCtrl.signin)
dataRouter.post('/signup-app-user',         dataCtrl.registerAppUser)
dataRouter.post('/send-reset-password',     dataCtrl.sendEmailResetPassword)
dataRouter.post('/reset-password-data',     dataCtrl.resetPasswordWithData)
dataRouter.get('/confirm-email/:id',        dataCtrl.confirmEmailWithToken)

export default dataRouter