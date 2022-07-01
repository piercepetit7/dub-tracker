import { Profile } from "../models/profile.js"
import { Win } from "../models/win.js"

function index(req, res) {
    Profile.find({})
    .then(profiles => {
        res.render('profiles/', {
            title: "Profiles",
            profiles,
        })
    })
}

function show(req, res) {
    Profile.findById(req.params.id)
    .then((profile) => {
        Win.find({ owner: profile._id })
        .populate("owner")
            .then((wins) => {
                Profile.findById(req.user.profile)
                .then(userProfile => {
                    res.render("profiles/show", {
                        title: `${profile.name}'s profile`,
                        profile,
                        userProfile,
                        wins,
                    })
                })
            })
        })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}


export {
    show,
    index,
}