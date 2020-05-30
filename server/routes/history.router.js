const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('in history GET req.params.id:', req.params.id);
    const queryText  = `SELECT * FROM "employee_time" WHERE "user_id" = $1 ORDER BY "start" DESC;`;
     pool.query(queryText, [req.params.id])
     .then(results => res.send(results.rows))
     .catch(error => {
         console.log('Error retrieving Hours', error);
         res.sendStatus(500);
     })
    
});//End GET ROUTE

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in history POST req.body:', req.body);
    const queryText = `INSERT INTO "employee_time" ( "user_id", "start", "hours", "payroll_code", "mpls" ) VALUES ( $1, $2, $3, $4, $5 );`;
    pool.query(queryText, [req.body.user_id, req.body.start, req.body.hours, req.body.payroll_code, req.body.mpls])
    .then( result => {
        res.sendStatus(200);
    }).catch (error => {
        console.log(error);
        res.sendStatus(500);
        
    })

});//End POST ROUTE

router.delete('/:item_id', (req, res) => {
    console.log('in history.router Delete, req.params.item_id', req.params.item_id);
    const queryText = `DELETE FROM "employee_time" WHERE id=$1;`;
    pool.query(queryText, [req.params.item_id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('problem in History router Delete', error);
        res.sendStatus(500);
    })
})//End Delete Route

module.exports = router;