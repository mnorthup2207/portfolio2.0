const path = require("path");
const router = require("express").Router();

// const isAuth = require("../../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/landing.html"));
});

router.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/portfolio.html"))
})
router.get("/password", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/password.html"));
});
router.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/contact.html"));
});
router.get('/snake.html', function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/snake.html"));
});
router.get("/game", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/game.html"));
});

module.exports = router;
