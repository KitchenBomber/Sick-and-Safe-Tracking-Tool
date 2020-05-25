const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('req.user:', req.user);
    const queryText = `SELECT * FROM "user" WHERE "supervisor_id" = $1;`
    pool.query(queryText, [req.user.id])
    .then(results => res.send(results.rows))
    .catch(error => {
        console.log('Error retrieving Employees', error);
        res.sendStatus(500);
        
    })
    


});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;