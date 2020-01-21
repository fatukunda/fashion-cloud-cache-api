/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../app';
import { validCache, invalidCache } from './testData';

chai.use(chaiHttp);
const { expect } = chai;
const cacheUrl = '/cache';

describe('Test the Cache endpoints', () => {
  it('Should create a new cache', (done) => {
    const { key } = validCache;
    chai.request(app).post(cacheUrl).set('Accept', 'application/json')
      .send(validCache)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({ key });
        done();
      });
  });
});
