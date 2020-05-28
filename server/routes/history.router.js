const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('req.clicked', req.body);
    // const queryText  = `SELECT * FROM "employee_time" WHERE "user_id" = $1`
    //  pool.query(queryText, [req.clicked.id])
    //  .then(results => res.send(results.rows))
    //  .catch(error => {
    //      console.log('Error retrieving Hours', error);
    //      res.sendStatus(500);
    //  })
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;