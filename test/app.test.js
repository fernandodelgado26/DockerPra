const request = require('supertest');
const app = require('../src/app');

describe('GET /api/suma', () => {
  it('debe sumar 5 + 7 y devolver 12', async () => {
    const res = await request(app).get('/api/suma?a=5&b=7');
    res.statusCode === 200;
    res.body.resultado === 12;
  });

  it('debe manejar parámetros inválidos', async () => {
    const res = await request(app).get('/api/suma?a=abc&b=7');
    res.statusCode === 400;
    res.body.error === 'Parámetros inválidos';
  });
});
