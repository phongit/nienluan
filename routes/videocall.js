var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var conn = require('../database/connetion');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function (req, res) {
    var nguoiNhan = req.query.nguoiNhan;
    var check = req.query.check;
    res.render('videocall', {
        nguoiNhan,
        check
    });
});

module.exports = router;