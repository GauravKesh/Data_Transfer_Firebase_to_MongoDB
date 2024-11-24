const express = require('express');
const router = express.Router();
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogController.js');

// Route to create a new blog
router.post('/add', createBlog);

// Route to get all blogs
router.get('/getall', getAllBlogs);

// Route to get a single blog by ID
router.get('/get/:id', getBlogById);

// Route to update a blog
router.put('/update/:id', updateBlog);

// Route to delete a blog
router.delete('/delete/:id', deleteBlog);

module.exports = router;
