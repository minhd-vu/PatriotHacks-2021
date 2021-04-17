const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get(async function (req, res) {
    const users = await User.find({}).populate("entries").exec();
    const data = []
    
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
            amount: user.totalAmount,
        });
    });

    data.sort((a, b) => - (b.hours + b.amount) - (a.hours + a.amount));
    res.status(200).send(data);
});

module.exports = router;