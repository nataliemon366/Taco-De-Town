const router            = require('express').Router();
const yelpController    = require('./../../../controllers yelpController');

// api/blogs prepended to every route declared in here




// /api/blogs
router.route('/search')
    .get (yelpController.searchAll)
    .post(yelpController)

module.exports = router;