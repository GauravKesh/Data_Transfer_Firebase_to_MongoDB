const express = require('express');
const router = express.Router();
const {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require('../controllers/blog.controller.js');

// Route to create a new blog
router.post('/', createBlog);

// Route to get all blogs
router.get('/', getAllBlogs);

// Route to get a single blog by ID
router.get('/:id', getBlogById);

// Route to update a blog
router.put('/:id', updateBlog);

// Route to delete a blog
router.delete('/:id', deleteBlog);

module.exports = router;
