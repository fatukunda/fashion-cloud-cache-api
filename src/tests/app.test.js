/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing the landig page endpoint', () => {
  it('should print Welcome to Fashion Cloud Cache-API.', (done) => {
    chai.request(app).get('/').send().end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('Welcome to Fashion Cloud Cache-API.');
      done();
    });
  });
});
