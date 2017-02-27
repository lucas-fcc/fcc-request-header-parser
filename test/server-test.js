'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const assert = chai.assert;

chai.use(chaiHttp);

describe('API endpoint', () => {

    it('when receives a request returns an object', (done) => {

        chai.request(server)
            .get('/')
            .end((req, res) => {

                assert.strictEqual(res.status, 200);
                assert.isObject(res.body);
                assert.property(res.body, 'ipaddress');
                assert.property(res.body, 'language');
                assert.property(res.body, 'software');

                done();

            });

    });

});