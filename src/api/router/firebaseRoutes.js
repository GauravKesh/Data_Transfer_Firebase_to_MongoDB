const express = require("express");
const router = express.Router();
const {fireBaseGetData} = require("../controller/firebaseControllers");


router.get('/firebase/get/data',fireBaseGetData);

module.exports = router;