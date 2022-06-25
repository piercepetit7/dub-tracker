import { Win } from '../models/win.js'


function newWin(req, res) {
    res.render("wins/new",{
        title: 'Add Wins',
        user: req.user,
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

export {
    index,
    create,
    newWin as new,
}