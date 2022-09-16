const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const query = `SELECT * FROM "audio" ORDER BY "description" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all audio', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // POST route code here
  console.log(req.body);
  const query = `INSERT INTO "audio" ("description", "link", "general")
  VALUES ($1, $2, $3);`;

  const toAdd = req.body
  pool.query(query, [toAdd.description, toAdd.link, toAdd.general])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: adding audio', err);
      res.sendStatus(500)
    })
});

/**
 * Put route template
 */
router.put('/', rejectUnauthenticated, (req, res) => {
  // PUT route code here
  console.log(req.body);
  const query = `
    UPDATE "audio" 
    SET "description"=$1, "link"=$2, "general"=$3    
    WHERE id = $4;
    `;

  const toAdd = req.body
  pool.query(query, [toAdd.description, toAdd.link, toAdd.general, toAdd.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: editing audio', err);
      res.sendStatus(500)
    })
});

/**
 * Delete route template
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // Delete route code here
  console.log(req.body);
  const query = `
    DELETE from "audio"     
    WHERE id = $1;
    `;

  // const toAdd = req.body
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: deleting audio', err);
      res.sendStatus(500)
    })
});

module.exports = router;
