const { describe, it, beforeEach } = require('mocha');
const { expect } = require('chai');
const supertest = require('supertest');

const app = require('..');
const { version } = require('../package.json');

const versionEndpoint = '/version';

describe(`GET ${versionEndpoint}`, () => {
  let request;

  beforeEach(() => {
    request = supertest(app());
  });

  it('should return the service version', (done) => {
    request
      .get(versionEndpoint)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal({ version });
        done();
      });
  });
});
