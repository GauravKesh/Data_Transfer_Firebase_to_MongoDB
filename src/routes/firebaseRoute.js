const express=require('express')
const {addBlogToFirestore} = require('../controllers/firebaseControllers.js')
const router = express.Router();

router.post("/add", addBlogToFirestore);

module.exports = router;
