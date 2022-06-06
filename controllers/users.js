const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');
const AuthenticationFailedError = require('../errors/AuthenticationFailedError');

exports.getMe = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return next(new NotFoundError('Такого пользователя не существует'));
      }
      return res.send(user);
    })
    .catch(next);
};

exports.updateProfile = (req, res, next) => {
  const { email, name } = req.body;
  User.find({ email })
    .then((existingUser) => {
      if (existingUser.length !== 0) {
        if (existingUser[0]._id.toString() !== req.user._id) {
          return next(new ConflictError('Пользователь с таким email уже существует'));
        }
      }
      return User.findByIdAndUpdate(req.user._id, { email, name }, {
        new: true,
        runValidators: true,
      })
        .then((user) => {
          if (!user) {
            return next(new NotFoundError('Данный пользователь не найден'));
          }
          return res.send(user);
        })
        .catch((err) => {
          if (err.name === 'ValidationError') {
            next(new BadRequestError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
          } else {
            next(err);
          }
        });
    })
    .catch(next);
};

exports.registration = (req, res, next) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError('такой пользователь уже есть');
      } else {
        return bcrypt.hash(password, 10);
      }
    })
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => res.status(200).send({ mail: user.email }))
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        throw new BadRequestError('Данные не прошли валидацию');
      } else next(err);
    })
    .catch(next);
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      return res.send({ jwt: token });
    })
    .catch(() => {
      throw new AuthenticationFailedError('Не удалось авторизироваться');
    })
    .catch(next);
};
