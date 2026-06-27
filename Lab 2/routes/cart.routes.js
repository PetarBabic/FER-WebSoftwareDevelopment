const express = require("express");
const router = express.Router();

const data = require("../data/mydata.js");

router.get("/", function (req, res, next) {
    var id = req.params.id;
    var num = req.session.cart
    if(!num) {
        req.session.cart = Array.apply(null, Array(55)).map(function () {})
        num = req.session.cart
    }

    return res.render("cart", {
        categories: data,
        num: num
    })
});

router.post('/add/:id([0-9]{1,10})', function(req, res, next) {
    var category = req.body.category;
    var id = req.body.item;

    if(!req.session.cart)
        req.session.cart = Array.apply(null, Array(55)).map(function () {})

    if(!req.session.cart[id])
        req.session.cart[id] = 1
    else
        req.session.cart[id]++

    if(category == -1)
        res.redirect("/cart")
    else
        res.redirect("/home/getProducts/"+category)
});

router.post('/remove/:id([0-9]{1,10})', function(req, res, next) {
    var category = req.body.category;
    var id = req.body.item;

    if(!req.session.cart)
        req.session.cart = Array.apply(null, Array(55)).map(function () {})

    if(req.session.cart[id] == 0)
        req.session.cart[id] = 0
    else
        req.session.cart[id]--

    if(category == -1)
        res.redirect("/cart")
    else
        res.redirect("/home/getProducts/"+category)
});

module.exports = router;