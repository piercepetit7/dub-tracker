import { Win } from '../models/win.js'
import { Comment } from '../models/comment.js'
import { Profile } from "../models/profile.js"

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
        res.redirect(`/wins/${win._id}`)
        console.log(req.user.profile.name)
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function index(req, res) {
    Win.find({})
    .populate("owner")
    .then(wins => {
        res.render('wins/index', {
            wins,
            title: "All Dubs!!!"
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
    .populate({
        path: "comments",
        populate: {
            path: 'author'
        }
    })
    .then(win => {
        res.render('wins/show', {
            win,
            title: "show Dubs"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
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
        res.redirect('/')
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
            throw new Error ('You in da wrong place Dawg')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/`)
    })
}
function deleteWin(req, res) {
    Win.findByIdAndDelete(req.params.id)
    .then(win => {
        if (win.owner.equals(req.user.profile._id)) {
            win.delete()
            .then(() => {
                res.redirect('/wins/index')
            })
        } else {
            throw new Error ('You in da wrong place Dawg')
        }   
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

export {
    create,
    newWin as new,
    index,
    show,
    edit,
    update,
    deleteWin as delete,
}