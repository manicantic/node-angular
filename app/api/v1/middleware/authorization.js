const { verifyToken } = require('../services/auth.service');

const authorization = (req, res, next) => {
  const { authorization: authToken } = req.headers;
  if (verifyToken(authToken)) {
    return next();
  }
  return res.sendStatus(401);
}

module.exports = authorization;