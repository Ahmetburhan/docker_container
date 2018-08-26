var express = require('express');
var router = express.Router();
const fs = require('fs');
const db = require('../utils/db');
var users = require('../models/users.js');


/* GET home page. */
router.get('/', function (req, res, next) {
    // const users = JSON.parse(fs.readFileSync("./spec/fixtures/mockdata.json"));
    // console.log("data here", users)
    // // const promises = users.map(element => {
    // //     console.log("elements here",element);
    
    // //     return 
    // // });

    console.log(users)
    users.insertMockData()

    res.render('layout', { users: users });
});



module.exports = router;
