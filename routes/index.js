const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const usersRoute = require('./users');
const moviesRoute = require('./movies');
const auth = require('../middlewares/auth');
const { registration, login } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi
        .string()
        .min(2)
        .max(30)
        .label('Name')
        .messages({
          'string.base': '{#label} должно быть строкой',
          'any.required': 'Поле {#label} обязательно для заполнения',
          'string.min': '{#label} должно содержать не менее {#limit} символов',
          'string.max': '{#label} должно содержать не более {#limit} символов',
          'string.empty': 'Поле {#label} не может быть пустым',
        }),
      email: Joi
        .string()
        .required()
        .email()
        .label('Email')
        .messages({
          'string.base': '{#label} должен быть строкой',
          'any.required': 'Поле {#label} обязательно для заполнения',
          'string.email': '{#label} должен быть валидным',
          'string.empty': 'Поле {#label} не может быть пустым',
        }),
      password: Joi
        .string()
        .required()
        .label('Password')
        .messages({
          'string.base': '{#label} должен быть строкой',
          'any.required': 'Поле {#label} обязательно для заполнения',
          'string.min': '{#label} должен содержать не менее {#limit} символов',
          'string.empty': 'Поле {#label} не может быть пустым',
        }),
    }),
  }),
  registration,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.use(auth);
router.use('/users', usersRoute);
router.use('/movies', moviesRoute);

router.use(auth, usersRoute);
router.use(auth, moviesRoute);

router.use('*', () => {
  throw new NotFoundError('Адрес не найден');
});

module.exports = router;
