const router = require('express').Router();
const commandeController = require('../../controllers/commande-controller');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',commandeController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:id',commandeController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,commandeController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:id',auth,commandeController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,commandeController.delete)

module.exports = router;