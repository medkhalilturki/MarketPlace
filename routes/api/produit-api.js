const router = require('express').Router();
const produitController = require('../../controllers/produit-controllers');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',produitController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:id',produitController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,produitController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:id',auth,produitController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,produitController.delete)

module.exports = router;