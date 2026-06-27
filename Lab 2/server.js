const path = require("path");
const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/public", express.static(__dirname + '/public'));

const home_router = require("./routes/home.routes");
const cart_router = require("./routes/cart.routes");

app.use(
    session({
        secret: "anything",
        cookie: {maxAge: 1200000},
        saveUninitialized: true,
        resave: true
    })
);

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/home/getCategories');
  });
app.get('/home', (req, res) => {
    res.redirect('/home/getCategories');
  });

app.use('/home', home_router);
app.use('/cart', cart_router);

app.listen(8080);