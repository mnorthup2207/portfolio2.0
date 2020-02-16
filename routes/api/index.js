const router = require("express").Router();
const contactRoutes = require("./contact-info");

router.use("/contact-info", contactRoutes);

module.exports = router;