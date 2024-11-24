const express = require("express");
const router = express.Router();
const {
  fireBaseGetData,
  fireBaseAddData,
  fireBaseUpdateData,
} = require("../controller/firebaseControllers");


router.get('/firebase/get/data',fireBaseGetData);
router.post("/firebase/add/data", fireBaseAddData);
router.post("/firebase/update/data", fireBaseUpdateData);

module.exports = router;