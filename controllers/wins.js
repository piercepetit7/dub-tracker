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

export {
    create,
    newWin as new,
}