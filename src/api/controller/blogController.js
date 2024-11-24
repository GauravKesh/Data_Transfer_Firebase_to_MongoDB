const Blog = require('../../models/blogModel.js');

// @desc Create a new blog
// @route POST /api/blogs
const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        // Validate input
        if (!title || !content || !author) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create new blog
        // const newBlog = new Blog({ title, content, author });
        const savedBlog = await Blog.create({ title, content, author });

        res.status(201).json(savedBlog);
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
};

// @desc Get all blogs
// @route GET /api/blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Get a single blog by ID
// @route GET /api/blogs/:id
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Update a blog
// @route PUT /api/blogs/:id
const updateBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        // Validate input
        if (!title || !content || !author) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true } // Returns the updated document
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Delete a blog
// @route DELETE /api/blogs/:id
const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        res.status(200).json({ message: 'Blog deleted successfully.', blog: deletedBlog });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};
