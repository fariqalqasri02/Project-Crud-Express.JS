const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ObjectID = Schema.ObjectId;

const  Tugas2Schema = new Schema({
    id: ObjectID,
    title: String,
    status: String

}, {timestamps: true});

const Tugas2 = mongoose.model('Tugas2', Tugas2Schema)

module.exports = Tugas2 