const movieRouter = require('express').Router();
const { celebrate, Joi} = require('celebrate');
const validator = require('validator');
const { getMovies, postMovie, deleteMovie } = require('../controllers/movies');

movieRouter.get('/movies', getMovies);
movieRouter.post(
  '/movies',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.number().required(),
      description: Joi.string().required(),
      image: Joi.string()
        .required()
        .custom((value, helpers) => {
          if (validator.isURL(value)) {
            return value;
          }
          return helpers.message('Изображение должно быть указано ссылкой');
        }),
      trailer: Joi.string()
        .required()
        .custom((value, helpers) => {
          if (validator.isURL(value)) {
            return value;
          }
          return helpers.message('Трейлер должен быть передан ссылкой');
        }),
      thumbnail: Joi.string().required().custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message('Миниатюра должна быть передана ссылкой');
      }),
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
      movieId: Joi.string().length(24).hex(),
    }),
  }),
  deleteMovie,
);

module.exports = movieRouter;