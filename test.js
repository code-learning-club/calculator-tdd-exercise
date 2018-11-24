const operations = require('./operations.js');
const assert = require('assert');

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.additioner(1, 3), 4);
});

it('correctly calculates the difference of 33 and 3', () => {
    assert.equal(operations.soustraire(33, 3), 30);
});