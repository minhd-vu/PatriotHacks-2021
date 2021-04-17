const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    code: { type: String, required: true, unique: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;