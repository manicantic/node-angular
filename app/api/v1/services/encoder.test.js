const encoderService = require('./encoder.service');

describe('Testing method for encoding string', () => {
  test('with valid input XXXYYYYZZQXX', () => {
    const input = 'XXXYYYYZZQXX';
    const expectedOutput = 'X3Y4Z2Q1X2';
    const output = encoderService.encodeString(input);
    expect(output).toMatch(expectedOutput);
  });

  test('with valid input AAAAUUUZZGT', () => {
    const input = 'AAAAUUUZZGT';
    const expectedOutput = 'A4U3Z2G1T1';
    const output = encoderService.encodeString(input);
    expect(output).toMatch(expectedOutput);
  });

  test('with valid input AAAAuuUUbbgHh', () => {
    const input = 'AAAAuuUUbbgHh';
    const expectedOutput = 'A4u2U2b2g1H1h1';
    const output = encoderService.encodeString(input);
    expect(output).toMatch(expectedOutput);
  });

  test('with valid input HHHUdasu7A', () => {
    const input = 'HHHUdasu7A';
    const output = encoderService.encodeString(input);
    expect(output).toBeNull();
  });
})