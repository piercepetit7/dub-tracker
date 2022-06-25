import { Win } from '../models/win.js'

function index(req, res) {
    Win.find({})
    .then(wins => {
        res.render('wins/index', {
            wins,
            title: "boom", 
            user: req.user,
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
        req.body.crownedVictory = !!req.body.crownedVictory
    Win.create(req.body)
    .then(win => {
        res.redirect('/wins')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/wins')
    })
}

export {
    index,
    create,
}