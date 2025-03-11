const request = require('supertest');
const app = require('../src/app');

describe('Test app.js', () => {
  test('GET /api should return JSON message', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello CI/CD World!');
  });

  test('GET /api/health should return status ok', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
