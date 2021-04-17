const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");
const { customAlphabet } = require("nanoid/non-secure");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 5);
const Group = require("../../models/group.model");
const mongoose = require("mongoose");

router.route("/").get(isLoggedIn, async function createGroup (req, res) {
    console.log(req.user);

    const code = nanoid();

    const group = new Group({
        code: code
    });

    group.users.push(req.user);

    try {
        await group.save();
    } catch (err) {
        if (err.code === "11000") {
            return createGroup(req, res);
        } else {
            throw err;
        }
    }

    req.user.group = group;

    await req.user.save();

    console.log(group);
    res.status(200).send(group.code);
});

module.exports = router;