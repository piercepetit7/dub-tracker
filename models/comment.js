import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {type: Number, min: 1, max: 5},
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
    timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema)

export {
	Comment
}