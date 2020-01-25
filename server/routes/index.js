const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ username: "h662" }));

module.exports = router;
