const path = require('path');
const fs = require('fs-extra');

const createError = require('http-errors');
const express = require('express');
const router = express.Router();

const employeesListFile = path.resolve(__dirname, '..', 'data', 'emplist.json');

router
.get('/', (req, res, next) => {
    return fs.readJSON(employeesListFile)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
})
.post('/', (req, res, next) => {
    const data = req.body;
    return fs.writeJSON(employeesListFile, data)
    .then((result) => {
        res.json({'status' : 'ok'});
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
})

module.exports = router;
