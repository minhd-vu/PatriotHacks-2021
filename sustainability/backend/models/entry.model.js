const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    location: { type: String, required: true },
    hours: { type: Number, required: true },
    bags: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
}, { timestamps: true });

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;