const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");
const Group = require("../../models/group.model");
const User = require("../../models/user.model");

router.route("/").get(isLoggedIn, async function (req, res) {
    await Group.updateOne({ _id: req.user.group }, { $pullAll: { users: [req.user._id] } });
    await Group.deleteOne({ users: { $exists: true, $size: 0 } });

    req.user.group = null;

    await req.user.save();

    res.status(200).send();
});

module.exports = router;