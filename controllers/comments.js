import { Win } from '../models/win.js'
import { Comment } from '../models/comment.js'

function create(req, res) {
    req.body.author = req.user.profile._id
    req.body.win = req.params.id
    Comment.create(req.body)
    .then((comment) => {
        Win.findById(req.params.id)
        .then((win) => {
            win.comments.push(comment._id)
            win.save()
            .then(()=> {
                res.redirect(`/wins/${win._id}`)
            })
        })
    })
}

export { 
    create, 
}



