const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/'));

app.get("/", function (req, res) {
    res.render("pages/index");
});

app.get("/calc", function (req, res) {
    res.render("pages/calc");
});

app.get("/ticTacToe", function (req, res) {
    res.render("pages/ticTacToe");
});

app.get("/mataMosca", function (req, res) {
    res.render("pages/killFly");
});

app.get("/game", function (req, res) {
    res.render("pages/game");
});

app.get("/victory", function (req, res) {
    res.render("pages/victory");
});

app.get("/gameOver", function (req, res) {
    res.render("pages/gameOver");
});

app.listen(PORT, () => {
    console.log("Servidor rodando!");
});