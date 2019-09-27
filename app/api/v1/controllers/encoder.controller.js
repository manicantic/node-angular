const encoderService = require('../services/encoder.service');

/**
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
const encodeInput = async (req, res, next) => {
  const { string } = req.body;
  if (!string) {
    res.status(400).send('Input string is not provided.');
    return;
  }
  try {
    const encodedString = encoderService.encodeString(string);
    if (!encodedString) {
      res.status(400).send('Input string is not valid.');
      return;
    }
    res.json({ encodedString });
    return;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  encodeInput
}