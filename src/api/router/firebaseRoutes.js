const express = require("express");
const router = express.Router();
const {
    fireBaseGetData,
    fireBaseAddData,
    fireBaseUpdateData,
    fireBaseDeleteData,
} = require("../controller/firebaseControllers");

router.get("/firebase/get/data", fireBaseGetData);
router.post("/firebase/add/data", fireBaseAddData);
router.post("/firebase/update/data", fireBaseUpdateData);
router.delete("/firebase/delete/data/:id", fireBaseDeleteData);

module.exports = router;
