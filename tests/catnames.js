const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);
const should = chai.should();

describe('catnames api', () => {
  it('should return all cats', (done) => {
    api.get('/catnames')
    .expect(200)
    .end((err, res) => {
      if(err) return done(err);

      res.body[0].name.should.be.a('string');

      done();
    });
  });

  it('add a new cat name to the db', (done) => {
    api.post('/catnames')
    .send({name: 'testCat'})
    .expect(200, done)
  })
});
