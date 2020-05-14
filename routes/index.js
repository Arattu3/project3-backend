var express = require('express');
var router = express.Router();
var users = require('../queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getusers', users.getallusers)

router.get('/getuserid/:id', users.getuserbyid)

router.get('/insertuser/:username/:password', users.insertuser)

module.exports = router;  
