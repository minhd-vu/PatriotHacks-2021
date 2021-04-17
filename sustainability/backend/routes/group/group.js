const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");

router.route("/").get(isLoggedIn, async function (req, res) {
    await req.user.execPopulate("group");
    await req.user.group?.execPopulate("users");
    // await req.user.group?.users?.execPopulate("entries");

    res.status(200).send(req.user.group);
});

module.exports = router;