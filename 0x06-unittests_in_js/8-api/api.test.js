const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
    const url = 'http://localhost:7865';

    it('responds with status code 200', async () => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('responds with correct result', async () => {
        request(url, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
        });
    });
});

