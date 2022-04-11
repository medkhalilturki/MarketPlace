const router = require('express').Router();
const categorieController = require('../../controllers/categorie-controller');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',categorieController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:id',categorieController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,categorieController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:id',auth,categorieController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,categorieController.delete)

module.exports = router;