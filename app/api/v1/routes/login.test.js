const request = require('supertest')
const app = require('../../../../app');

describe('Login post endpoint', () => {
  test('should return token with status 200 for a valid combination of username and password', async () => {
    const res = await request(app)
      .post('/api/v1/login')
      .set({ Accept: 'application/json' })
      .send({
        email: 'optimus.prime@autobots.com',
        password: 'validPassword1234!'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('token')
  });

  test('should return token with status 200 for a valid combination of username and password', async () => {
    const res = await request(app)
      .post('/api/v1/login')
      .set({ Accept: 'application/json' })
      .send({
        email: 'optimus.prime@autobots.com',
        password: 'wrongPassword'
      })
    expect(res.statusCode).toEqual(401);
  });
})