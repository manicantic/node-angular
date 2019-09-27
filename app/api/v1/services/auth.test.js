require('dotenv').config();

const authService = require('./auth.service');

describe('Testing method for generating and verifying token. ', () => {
  test('Generate token', () => {
    const token = authService.generateAuthToken();
    expect(token).toBeDefined();
  });

  test('Generate token and verify valid token', () => {
    const token = authService.generateAuthToken();
    const isValid = authService.verifyToken(token);
    expect(isValid).toBeTruthy();
  });

  test('Generate token and verify changed token', () => {
    const token = authService.generateAuthToken();
    const isValid = authService.verifyToken(token.substring(1));
    expect(isValid).toBeFalsy();
  });
})