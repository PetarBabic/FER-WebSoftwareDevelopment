const express = require("express");
const router = express.Router();

const data = require("../data/mydata.js");

router.get("/", function (req, res, next) {
    return res.render("home", {
        categories: null,
        category: null
    });
});

router.get("/getCategories", function(req, res, next) {
    var num = req.session.cart
    if(!num) {
        req.session.cart = Array.apply(null, Array(55)).map(function () {})
        num = req.session.cart
    }

    return res.render("home", { 
        categories: data,
        category: null,
        num: num
    })
})

router.get("/getProducts/:id([0-9]{1,10})", function(req, res, next) {
    var id = req.params.id;
    var num = req.session.cart
    if(!num) {
        req.session.cart = Array.apply(null, Array(55)).map(function () {})
        num = req.session.cart
    }

    if(data.at(id))
        res.render("home", 
        {
            categories: data,
            category: id,
            num: num

        })
    else
        res.status(404).send("Ne postoji trazena kategorija");
})


module.exports = router;