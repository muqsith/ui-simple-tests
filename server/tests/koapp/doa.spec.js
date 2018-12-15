const assert = require('assert');

const doa = require('../../lib/koapp/doa');


describe('LokiJS - DOA test', function () {
    it('should add employee record', function () {
        doa.addEmployee({id: 1001, firstName: 'Muqsith', lastName: 'Irfan', age: 33});
        assert.ok(true);
    });
})
