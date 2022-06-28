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
        console.log(req.user.profile.name)
    Win.create(req.body)
    .then(win => {
        console.log("created win:", win)
        res.redirect('/wins/new')
        console.log(req.user.profile.name)
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

function show(req, res) {
    Win.findById(req.params.id)
    .populate("owner")
    .then(win => {
        res.render('wins/show', {
            win,
            title: "show Dubs"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/wins')
    })
}

function edit(req, res) {
    //console.log("????"(req.params.id))
    Win.findById(req.params.id)
    .then(win => {
        res.render(`wins/edit`, {
            win,
            title: "edit dub"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/wins')
    })
}
function update(req, res) {
    Win.findById(req.params.id)
    .then(win => {
        if (win.owner.equals(req.user.profile._id)) {
            win.updateOne(req.body, {new: true})
            .then(()=> {
                res.redirect(`/wins/${win._id}`)
            })
        } else {
            throw new Error ('you in da wrong place')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/wins`)
    })
}


export {
    create,
    newWin as new,
    index,
    show,
    edit,
    update,
}