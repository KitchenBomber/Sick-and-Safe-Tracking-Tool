const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('in history POST req.body:', req.body);
    const queryText = `INSERT INTO "employee_time" ( "user_id", "start", "hours", "payroll_code", "mpls" ) 
    VALUES ( $1, $2, $3, $4, $5 ),
    ( $6, $7, $8, $9, $10 ),
    ( $11, $12, $13, $14, $15 ),
    ( $16, $17, $18, $19, $20),
    ( $21, $22, $23, $24, $25)
    ;`;
    pool.query(queryText, [req.body.user_id, req.body.start1, req.body.hours1, req.body.payroll_code1, req.body.mpls1,
        req.body.user_id, req.body.start2, req.body.hours2, req.body.payroll_code2, req.body.mpls2,
        req.body.user_id, req.body.start3, req.body.hours3, req.body.payroll_code3, req.body.mpls3,
        req.body.user_id, req.body.start4, req.body.hours4, req.body.payroll_code4, req.body.mpls4,
        req.body.user_id, req.body.start5, req.body.hours5, req.body.payroll_code5, req.body.mpls5])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);

        })

});//End POST ROUTE

module.exports = router;