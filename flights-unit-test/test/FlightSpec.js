var app       = require('./helpers/app');

var should    = require('should'),
    supertest = require('supertest');

describe('Flights', function () {

    it('Should return valid flight data for flight 18', function (done) {
        supertest(app)
            .get('/flight/18')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });

    it('Should return error for invalid flight', function (done) {
        supertest(app)
            .get('/flight/999999999')
            .expect(404)
            .end(function (err, res) {
                res.status.should.equal(404);
                done();
            });
    });

    it('Should mark a flight as arrived', function (done) {
        supertest(app)
            .put('/flight/18/arrived')
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.status.should.equal('arrived');

                supertest(app)
                    .get('/flight/18')
                    .expect(200)
                    .end(function (err, res) {
                        res.status.should.equal(200);
                        res.body.actualArrive.should.not.equal(undefined);
                        done();
                    });
            });
    });

});