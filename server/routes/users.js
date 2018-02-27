var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');
var crypto = require('crypto');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = req.body.password;
    handler(req, res, 'users', {name: req.body.username}, function (data) {
        if (data.length === 0) {
            res.end('{"err":"抱歉,系统中并无该用户"}');
        } else if (data[0].password != password) {
            res.end('{"err":"密码不正确"}');
        } else if (data.length != 0 && data[0].password === password) {
            req.session.username = req.body.username;
            req.session.password = password;
            res.end('{"success":"true"}');
        }
    })
})


module.exports = router;
