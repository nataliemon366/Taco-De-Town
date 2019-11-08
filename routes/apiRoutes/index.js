const router = require('express').Router();

const authRoutes = require('./authRoutes');
const blogRoutes = require('./blogRoutes');
const yelpRoutes = require('./yelpRoutes');

// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/blogs', blogRoutes);
router.use('/yelp', yelpRoutes);

module.exports = router;