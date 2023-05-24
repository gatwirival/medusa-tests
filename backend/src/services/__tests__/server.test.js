// server.test.js
const request = require('supertest');

  describe('My App', () => {
    it('should return a 200 OK status code', () => {
      request('http://localhost:9000')
        .get('/', (res) => {
          expect(res.status).toBe(200);
        });
    });
  });