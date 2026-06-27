const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    //neki kod
    //koji view koristimo unutar 'views' foldera (home u ovom slucaju)
    return res.render("home", {

    });
});

module.exports = router;