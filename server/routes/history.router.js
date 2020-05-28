const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('req.clicked', req.params.id);
    const queryText  = `SELECT * FROM "employee_time" WHERE "user_id" = $1 ORDER BY "start" DESC;`;
     pool.query(queryText, [req.params.id])
     .then(results => res.send(results.rows))
     .catch(error => {
         console.log('Error retrieving Hours', error);
         res.sendStatus(500);
     })
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;