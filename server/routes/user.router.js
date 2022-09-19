const express = require('express');
// const { restart } = require('nodemon');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.get('/clients', rejectUnauthenticated, (req, res) => {
  const query = 'SELECT * FROM "user" ORDER BY "first_name" ASC';
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error in getting client list', err);
      res.sendStatus(500)
    })
});

router.delete('/client/:id', rejectUnauthenticated, (req, res) => {
  // Delete route code here
  console.log(req.body);
  const query = `
    DELETE from "user"     
    WHERE id = $1;
    `;

  // const toAdd = req.body
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: deleting client', err);
      res.sendStatus(500)
    })
});

router.put('/approve/:id', rejectUnauthenticated, (req, res) => {
  const query = `
    UPDATE "user"
    SET "approved"=true
    WHERE "id" = $1`;
  pool.query(query, [req.params.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error in getting client list', err);
      res.sendStatus(500)
    })
});

router.put('/client/:id', rejectUnauthenticated, async (req, res) => {
  console.log(req.body);

  const connection = await pool.connect();

  try {
    await connection.query('BEGIN')
    const query = `
    UPDATE "user"
    SET "first_name"=$1, "last_name"=$2, "info"=$3
    WHERE "id" = $4;`;
    await connection.query(query, [req.body.first_name, req.body.last_name, req.body.info, req.params.id]);
    const junctionQuery = `
  INSERT INTO "user_audio" ("user_id", "audio_id")
  VALUES ($1, $2);`;
    await connection.query(junctionQuery, [req.params.id, req.body.audio_id]);
    await connection.query('COMMIT');
    res.sendStatus(200)
  }
  catch (err) {
    await connection.query('ROLLBACK')
    console.log('Error in getting client list', err);
    res.sendStatus(500)
  }
  finally {
    connection.release()
  }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;


  const queryText = `INSERT INTO "user" (username, password, first_name, last_name)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [username, password, firstName, lastName])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
