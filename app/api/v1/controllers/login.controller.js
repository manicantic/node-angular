const { generateAuthToken } = require('../services/auth.service');

/**
 * @param {Request} req
 * @param {Response} res
 */
const loginUser = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(401).send('Please provide valid email and password.')

  if (
    email === 'optimus.prime@autobots.com' &&
    password === 'validPassword1234!'
  ) {
    const token = generateAuthToken();
    return res.send({ token })
  }
  return res.status(401).send('Login failed.')
}

module.exports = {
  loginUser
}