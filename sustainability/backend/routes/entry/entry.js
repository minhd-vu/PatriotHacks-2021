const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");
const Entry = require("../../models/entry.model");

router.route("/").get(async function (req, res) {
    const entries = await Entry.find({}).exec();
    res.status(200).send(entries);
});

router.route("/").post(isLoggedIn, async function (req, res) {
    console.log(req.user);

    const entry = new Entry({
        location: req.body.location,
        hours: req.body.hours,
        bags: req.body.bags,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });

    await entry.save();
    req.user.entries.push(entry);
    await req.user.save();

    console.log(entry);
    res.status(200).send(entry);
});

module.exports = router;