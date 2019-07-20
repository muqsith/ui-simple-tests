const koapp = require('./koapp');
const test = require('./test');

module.exports = function (app) {
    app.use('/api/koapp', koapp);
    app.use('/api/test', test);
};
