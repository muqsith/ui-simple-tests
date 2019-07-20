const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.get('/', (req, res, next) => {
    console.log('GET method called');
    res.json({'status' : 'ok'});
})
.post('/', (req, res, next) => {
    console.log('POST method called');
    console.log(req.body);
    res.json({'text' : `Hello ${req.body.text}`});
})
.put('/', (req, res, next) => {
    console.log('PUT method called');
    res.json({'status' : 'ok'});
})
.delete('/', (req, res, next) => {
    console.log('DELETE method called ');
    res.json({'status' : 'ok'});
});

module.exports = router;
