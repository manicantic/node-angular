const { verify, sign } = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const tokenDuration = process.env.JWT_DURATION || '30d'

/**
 * 
 * @param {string} token
 * @returns {boolean} Returns validation status of a token 
 */
const verifyToken = token => {
  if (!token) return false;
  try {
    verify(token, secret);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const generateAuthToken = () => sign({}, secret, { expiresIn: tokenDuration });

module.exports = {
  verifyToken,
  generateAuthToken
}