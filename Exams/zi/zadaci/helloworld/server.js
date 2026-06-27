const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/public", express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: true
}));

const home_router = require("./routes/home.routes");
const movies_router = require("./routes/movies.routes");

app.use(
    session({
    secret: "anything",
    cookie: {maxAge: 1200000},
    saveUninitialized: true,
    resave: true
    })
);

// sretno! :)

app.use('/', home_router);
app.use('/movies', movies_router);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
})

// -------------------------
const secureRoutes = ['/admin', '/profile'];