const router = require("express").Router();
const isLoggedIn = require("../../helpers/isLoggedIn");

router.route("/").get(isLoggedIn, async function (req, res) {
    await req.user.execPopulate("group");
    await req.user.group?.execPopulate("users");
    await req.user.group?.execPopulate("users.entries");

    let users = req.user.group?.users;
    let data = [];

    users.forEach(user => {
        user.totalHours = 0;
        user.totalAmount = 0;

        user.entries.forEach(entry => {
            user.totalHours += entry.hours;
            user.totalAmount += entry.amount;
        });

        data.push({
            username: user.username,
            hours: user.totalHours,
            amount: user.totalAmount
        });
    });

    data.sort((a, b) => - (b.hours + b.amount) - (a.hours + a.amount));
    res.status(200).send(data);
});

module.exports = router;