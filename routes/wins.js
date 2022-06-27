import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as winsCtrl from '../controllers/wins.js'



const router = Router()

router.get('/new', isLoggedIn, winsCtrl.new)

router.post('/', isLoggedIn, winsCtrl.create)

//localhost: wins/index/
router.get('/index', isLoggedIn, winsCtrl.index)

export {
  router
}