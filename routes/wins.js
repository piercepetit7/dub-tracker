import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as winsCtrl from '../controllers/wins.js'



const router = Router()
router.get('/new', isLoggedIn, winsCtrl.new)

router.post('/', isLoggedIn, winsCtrl.create)

//localhost: wins/index/
router.get('/index', isLoggedIn, winsCtrl.index)

router.get('/:id', winsCtrl.show)
//localhost: wins/:id/edit
router.get('/:id/edit', isLoggedIn, winsCtrl.edit)

router.delete('/:id', isLoggedIn, winsCtrl.delete)

router.put('/:id', isLoggedIn, winsCtrl.update)

export {
  router
}