const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
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
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);
  const query = `INSERT INTO "audio" ("description", "link", "general")
  VALUES ($1, $2, $3);`;

  const toAdd = req.body
  pool.query(query, [req.body.description, req.body.link, req.body.general])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: adding audio', err);
      res.sendStatus(500)
    })
});

module.exports = router;
