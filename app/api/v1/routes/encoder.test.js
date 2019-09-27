const request = require('supertest')
const app = require('../../../../app');

const authService = require('../services/auth.service');


describe('Encoder post endpoint', () => {
  test('should encode valid string with status 200', async () => {
    const token = authService.generateAuthToken();
    const res = await request(app)
      .post('/api/v1/encoder')
      .set({ Authorization: token, Accept: 'application/json' })
      .send({
        string: 'XXXYYYYZZQXX',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('encodedString')
  });

  test('shouldn\'t encode invalid string and return status 400', async () => {
    const token = authService.generateAuthToken();
    const res = await request(app)
      .post('/api/v1/encoder')
      .set({ Authorization: token, Accept: 'application/json' })
      .send({
        string: 'ADASD45',
      })
    expect(res.statusCode).toEqual(400);
  });

  test('should return status 400 if there is no string in a body', async () => {
    const token = authService.generateAuthToken();
    const res = await request(app)
      .post('/api/v1/encoder')
      .set({ Authorization: token, Accept: 'application/json' })
      .send()
    expect(res.statusCode).toEqual(400);
  });

  test('should return status 401 if there is no auth token', async () => {
    const token = authService.generateAuthToken();
    const res = await request(app)
      .post('/api/v1/encoder')
      .set({ Accept: 'application/json' })
      .send({
        string: 'XXXYYYYZZQXX',
      })
    expect(res.statusCode).toEqual(401);
  });

  test('should return status 401 if there is invalid auth token', async () => {
    const token = authService.generateAuthToken();
    const res = await request(app)
      .post('/api/v1/encoder')
      .set({ Authorization: token.substring(1), Accept: 'application/json' })
      .send({
        string: 'XXXYYYYZZQXX',
      })
    expect(res.statusCode).toEqual(401);
  });
})