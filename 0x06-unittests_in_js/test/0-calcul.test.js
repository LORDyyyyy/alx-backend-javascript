const { it, describe } = require("mocha");
const assert = require('assert');
const calcul = require('../0-calcul.js');


describe('First UnitTest', () => {
    it('Are Equal', () => {
        const result = calcul(1.4, 2.6);
        assert.strictEqual(result, 4);
    });

    it('Are Equal', () => {
        const result = calcul(1, 1);
        assert.strictEqual(result, 2);
    });

    it('Are Equal', () => {
        const result = calcul(-1.5, -1.5);
        assert.strictEqual(result, -2);
    });

    it('Are Equal', () => {
        const result = calcul(0, 0);
        assert.strictEqual(result, 0);
    });
});
