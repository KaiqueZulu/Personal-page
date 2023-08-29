const { Router } = require("express");

const router = new Router();

router.get("/", function (req, res) {
  res.render("pages/index");
});

router.get("/calc", function (req, res) {
  res.render("pages/calc");
});

router.get("/ticTacToe", function (req, res) {
  res.render("pages/ticTacToe");
});

router.get("/mataMosca", function (req, res) {
  res.render("pages/killFly");
});

router.get("/game", function (req, res) {
  res.render("pages/game");
});

router.get("/victory", function (req, res) {
  res.render("pages/victory");
});

router.get("/gameOver", function (req, res) {
  res.render("pages/gameOver");
});

module.exports = router;