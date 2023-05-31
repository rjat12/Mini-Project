const express = require("express");
const register1 = require("./register1");
const login1 = require("./login1");
const login2 = require("./login2");

const login3 = require("./login3");
const d1 = require("./d1")
const d2 = require("./d2")
//const d3=require("./d3")
const d4 = require("./d4")
const d5 = require("./d5");
const d6 = require("./d6");
const router = express.Router();

router.post("/register1", register1);
router.post("/login1", login1);
router.post("/login2", login2);
router.post("/login3", login3);
//router.post("/logout");
router.post('/d1', d1)
router.post('/d2', d2)
//router.post('/d3',d3)
router.post('/d4', d4)
router.post('/d5', d5)
router.post('/d6', d6)

//

module.exports = router;