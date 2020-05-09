const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    todo: { type: String, required: true },
    done: { type: Boolean, default: false }
}, {timestamps:true})

const List = mongoose.model('List', listSchema)

module.exports = List