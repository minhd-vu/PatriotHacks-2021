const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    desc: { type: String, required: true },
    hours: { type: Number, required: true },
    amount: { type: Number, required: true },
}, { timestamps: true });

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;