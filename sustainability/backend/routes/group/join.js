const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");
const Group = require("../../models/group.model");
const User = require("../../models/user.model");

router.route("/:id").get(isLoggedIn, function (req, res) {
    Group.findOne({ "code": req.params.id }, async function (err, group) {
        if (err) console.log(err);

        if (!group) {
            return res.status(400).send("Could not find group with code " + req.params.id + ".");
        }

        if (!group.users.some(e => String(e) === String(req.user._id))) {
            req.user.group = group;
            await req.user.save();
            group.users.push(req.user);
            await group.save();
        }

        await group.execPopulate("users");
        return res.status(200).send(group);
    });
});

module.exports = router;