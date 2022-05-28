const usersRoute = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { registration, login } = require('../controllers/users');

const { getMe, updateProfile } = require('../controllers/users');


usersRoute.get('/users/me', getMe);

usersRoute.patch(
  '/users/me', 
  celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), updateProfile);

module.exports = usersRoute;