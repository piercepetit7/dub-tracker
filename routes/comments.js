import { Router } from 'express'
import * as commentsCtrl from "../controllers/comments.js"

const router = Router()

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

//POST /reviews/:id
router.post('/:id', isLoggedIn, commentsCtrl.create)

export {
    router
}