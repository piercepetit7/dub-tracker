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
        console.log("created win:", win)
        res.redirect('/wins/new')
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
            title: "all dubs"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

export {
    create,
    newWin as new,
    index
}