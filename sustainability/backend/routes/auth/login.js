const router = require("express").Router();
const passport = require("passport");
const isLoggedIn = require("../../helpers/isLoggedIn");

router.route("/").get(isLoggedIn, async function (req, res) {
    await req.user.execPopulate("group");

    res.status(200).send({
        username: req.user.username,
        group: req.user.group ? req.user.group.code : null,
    });
});

router.route("/").post(passport.authenticate("local"), async function (req, res) {
    if (isLoggedIn) {
        console.log(req.user);

        await req.user.execPopulate("group");

        res.status(200).send({
            username: req.user.username,
            group: req.user.group ? req.user.group.code : null,
        });
    } else {
        res.status(204).send();
    }
});

module.exports = router;