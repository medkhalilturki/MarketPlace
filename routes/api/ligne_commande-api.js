const router = require('express').Router();
const lignecommandeController = require('../../controllers/ligne_commande-controller');
const auth = require('../../middleware/auth');



// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,lignecommandeController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:id',auth,lignecommandeController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,lignecommandeController.delete)

module.exports = router;