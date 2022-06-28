import mongoose from 'mongoose'

const Schema = mongoose.Schema

const winSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "Profile"},
    crownedVictroy: Boolean,
    kills: Number,
    assists: Number,
    revives: Number,
    accuracy: Number,
    damageToPlayers: Number,
    headShots: Number,
    distanceTraveled: Number,
    damageTaken: Number,
    winStreak: Number,
    numOfSquadMates: Number,
    usersInSquad: String,
    squadKills: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
}, {
    timestamps: true
})

const Win = mongoose.model('Win', winSchema)

export {
    Win
}

