const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("This is contacts get API"));
router.post("/", (req, res) => res.send("This is contacts post API"));
router.put("/", (req, res) => res.send("This is contacts put API"));
router.delete("/", (req, res) => res.send("This is contacts delete API"));

module.exports = router;