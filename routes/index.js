const router = require('express').Router();
const usersRoute = require('./users');
const moviesRoute = require('./movies');
const auth = require('../middlewares/auth');
const { celebrate, Joi } = require('celebrate');
const { registration, login } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
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