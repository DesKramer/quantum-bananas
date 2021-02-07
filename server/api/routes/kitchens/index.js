const express = require("express");
const router = express.Router();
const all = require("./all");
const single = require("./single");
const latest = require("./latest");
const postSingle = require("./postSingle");

router.get("/", all);
router.get("/latest", latest);
router.get("/:kitchenId", single);

router.post("/", postSingle);

module.exports = router;
