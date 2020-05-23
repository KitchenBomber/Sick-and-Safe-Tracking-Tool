const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { rejectUnauthorized } = require('../modules/authorization-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, rejectUnauthorized, (req, res) => {
    console.log( 'in /test GET');
    res.send( req.user )
    
});

router.get('/admin', rejectUnauthenticated, (req, res) => {

})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;