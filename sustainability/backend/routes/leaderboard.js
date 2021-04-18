const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get(async function (req, res) {
    const users = await User.find({}).populate("entries").exec();
    const data = []
    
    users.forEach(user => {
        user.totalHours = 0;
        user.totalBags = 0;

        user.entries.forEach(entry => {
            user.totalHours += entry.hours;
            user.totalBags += entry.bags;
        });

        data.push({
            username: user.username,
            hours: user.totalHours,
            bags: user.totalBags,
        });
    });

    data.sort((a, b) => - (b.hours + b.bags) - (a.hours + a.bags));
    res.status(200).send(data);
});

module.exports = router;