import mongoose from 'mongoose'

const Schema = mongoose.Schema

const winSchema = new Schema({
    usersInSquad: String,
    crownedVictroy: Boolean,
    owner: {type: Schema.Types.ObjectId, ref: "Profile"},
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
}, {
    timestamps: true
})

const Win = mongoose.model('Win', winSchema)

export {
    Win
}

