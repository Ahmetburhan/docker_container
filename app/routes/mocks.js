var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
const fs = require('fs');
const db = require('../utils/db');

// // /* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log(users)
//   users.getAll().then((result) => {
//     console.log("result", result)
//     const users = result.map(item => ({
//       First: item.FirstName,
//       Last: item.LastName,
//       Active: item.IsActive
//     }));
//     res.render('layout', { users: users });
//     // res.send("users", {users: users});

//   })
//   .catch((err) => {
//     res.sendStatus(500);
//     res.render('error', { message: "Cannot get users", error: err });
//   });
// });





// /* GET home page. */
// router.get('/', function (req, res, next) {
//   const users = JSON.parse(fs.readFileSync("./spec/fixtures/mockdata.json"));
//   console.log("data here", users)
//   // const promises = users.map(element => {
//   //     console.log("elements here",element);

//   //     return 
//   // });
//   res.send("users", { users: users });
//   res.render('layout', { users: users });
// });


    

/* INSERT mocked user data */
router.get('/', function(req, res, next) {
  users.insertMockData().then((result) => {
    res.render('status', { status: `${result.message}\nUsers in database: ${result.count}` });
  })
  .catch((err) => {
    res.render('error', { message: "Cannot insert mock data", error: err });
  });
});

module.exports = router;
