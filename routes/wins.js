import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as winsCtrl from '../controllers/wins.js'



const router = Router()

router.get('/', isLoggedIn, winsCtrl.index)

router.post('/', isLoggedIn, winsCtrl.create)

export {
  router
}