const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("This is auth get API"));
router.post("/", (req, res) => res.send("This is auth post API"));

module.exports = router;