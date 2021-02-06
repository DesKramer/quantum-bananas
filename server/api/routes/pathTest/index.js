const orders = require("express").Router();
const all = require("./all");

orders.get("/", all);

module.exports = orders;
