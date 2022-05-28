const movieRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const BadRequest = require('../errors/BadRequestError');
const { getMovies, deleteMovie, postMovie } = require('../controllers/movies');

const validationUrl = (url) => {
  const validate = validator.isUrl(url);
  if (validate) {
    return url;
  }
  throw new BadRequest('Некорректная ссылка');
};

movieRouter.get('/movies', getMovies);

movieRouter.post(
  '/movies',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().custom(validationUrl),
      trailer: Joi.string().required().custom(validationUrl),
      thumbnail: Joi.string().required().custom(validationUrl),
      movieId: Joi.number().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  }),
  postMovie,
);

movieRouter.delete(
  '/movies/:movieId',
  celebrate({
    params: Joi.object().keys({
      movieId: Joi.string().required().hex().length(24),
    }),
  }),
  deleteMovie,
);

module.exports = movieRouter;
