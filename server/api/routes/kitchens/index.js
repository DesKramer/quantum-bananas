const express = require("express");
const router = express.Router();
const all = require("./all");
const postSingle = require("./postSingle");

router.get("/", all);

router.post("/", postSingle);

module.exports = router;
