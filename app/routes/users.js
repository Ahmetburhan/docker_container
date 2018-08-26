var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
const fs = require('fs');
const db = require('../utils/db');




/* GET users listing. */
router.get('/', function (req, res, next) {
  users.getAll().then((result) => {
    const users = result.map(item => ({
      FirstName: item.FirstName,
      LastName: item.LastName,
      IsActive: item.IsActive,
      Email: item.Email,
      LastLoginDate: item.LastLoginDate,
      Gender: item.Gender,
    }));
    // res.send({ Users: users }); //if you run this you got json
    res.render('layout', { Users: users });
  })
    .catch((err) => {
      res.sendStatus(500);
      res.render('error', { message: "Cannot get users", error: err });
    });
});

/* INSERT mocked user data */
router.get('/setup-mock-data', function (req, res, next) {
  users.insertMockData().then((result) => {
    res.render('status', { status: `${result.message}\nUsers in database: ${result.count}` });
  })
    .catch((err) => {
      res.render('error', { message: "Cannot insert mock data", error: err });
    });
});

module.exports = router;
