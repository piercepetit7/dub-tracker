import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {type: Number, min: 0, max: 5},
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
    win: { type: Schema.Types.ObjectId, ref: "Win" }
},{
    timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema)

export {
	Comment
}