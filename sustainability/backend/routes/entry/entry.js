const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");
const Entry = require("../../models/entry.model");

router.route("/").post(isLoggedIn, async function (req, res) {
    console.log(req.user);

    const entry = new Entry({
        desc: req.body.desc,
        hours: req.body.hours,
        amount: req.body.amount,
    });

    await entry.save();
    req.user.entries.push(entry);
    await req.user.save();

    console.log(entry);
    res.status(200).send(entry);
});

module.exports = router;