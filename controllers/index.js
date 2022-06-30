import { Win } from '../models/win.js'
import { Profile } from '../models/profile.js'
import { Comment } from '../models/comment.js'

function index(req, res) {
  Win.find({})
  .sort({_id: -1})
  .limit(6)
  .populate('owner')
  .then(wins => {
    Profile.find({})
    .sort({_id: -1})
    .limit(6)
    .then(profiles => {
      Comment.find({})
      .sort({_id: -1})
      .limit(6)
      .populate('author')
      .populate('win')
      .populate({
        path:'win',
        populate: {
          path: "owner"
        }
      })
      .then(comments => {
          res.render('index', {
            profiles,
            wins,
            comments,
            title: 'Latest Activity'
          })
        })
      })
    })
  }


export {
  index,

}



