const express = require("express");
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blogController.js");
const {
  fireBaseGetData,
  fireBaseAddData,
  fireBaseUpdateData,
  fireBaseDeleteData,
} = require("../controller/firebaseControllers");

/* Routes for data manipulation in mongoDB */


router.post("/mongodb/add", createBlog);
router.get("/mongodb/get/all", getAllBlogs);
router.get("/mongodb/get/:id", getBlogById);
router.put("/mongodb/update/:id", updateBlog);
router.delete("/mongodb/delete/:id", deleteBlog);


/* Routes for data manipulation in Firebase */

router.get("/firebase/get/data", fireBaseGetData);
router.post("/firebase/add/data", fireBaseAddData);
router.post("/firebase/update/:id", fireBaseUpdateData);
router.delete("/firebase/delete/:id", fireBaseDeleteData);

module.exports = router;
