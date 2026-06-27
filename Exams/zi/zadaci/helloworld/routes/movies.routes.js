const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    return res.render("movies", {
        movies: req.session.movies,
        directors: req.session.director
    });
});

router.get("/add", function (req, res, next) {
    return res.render("add_movies", {

    });
});

router.post("/add", function (req, res, next) {
    console.log(req.body);
    if(!req.session.movies)
        req.session.movies = [];
    if(!req.session.director)
        req.session.director = [];

    req.session.movies.push(req.body.title)
    req.session.director.push(req.body.director)

    res.redirect('/movies');
});
router.post("/delete/:id([0-9]{1,10})", function (req, res, next) {
    var id = req.body.counter;
    console.log(id);

    req.session.movies.splice(id, 1);
    req.session.director.splice(id, 1);

    res.redirect('/movies');
});

module.exports = router;