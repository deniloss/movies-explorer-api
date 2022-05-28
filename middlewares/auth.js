const jwt = require('jsonwebtoken');
const AuthenticationFailedError = require('../errors/AuthenticationFailedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthenticationFailedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'praktikum-diploma');
  } catch (err) {
    throw new AuthenticationFailedError('Необходима авторизация');
  }

  req.user = payload;

  next();
};
