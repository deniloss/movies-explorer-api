const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'поле "country" должно быть заполнено']
  },

  director: {
    type: String,
    required: [true, 'поле "director" должно быть заполнено']
  },

  duration: {
    type: Number,
    required: [true, 'поле "duration" должно быть заполнено']
  },

  year: {
    type: String,
    required: [true, 'поле "year" должно быть заполнено']
  },

  description: {
    type: String,
    required: [true, 'поле "description" должно быть заполнено']
  },

  image: {
    type: String,
    required: [true, 'поле "image" должно быть заполнено'],
    validate: {
      validator: (v) => validator.usUrl(v),
      message: 'Введите коректную ссылку на постер'
    },    
  },

  trailerLink: {
    type: String,
    required: [true, 'поле "trailerLink" должно быть заполнено'],
    validate: {
      validator: (v) => validator.usUrl(v),
      message: 'Введите коректную ссылку на трейлер'
    }, 
  },

  thumbnail: {
    type: String,
    required: [true, 'поле "thumbnail" должно быть заполнено'],
    validate: {
      validator: (v) => validator.usUrl(v),
      message: 'Введите коректную ссылку на миниатюру'
    },
  },

  owner: {
    type: String,
    required: [true, 'поле "owner" должно быть заполнено']
  },

  movieid: {
    type: Number,
    required: [true, 'поле "movieid" должно быть заполнено']
  },

  nameRU: {
    type: String,
    required: [true, 'поле "nameRU" должно быть заполнено']
  },

  nameEN: {
    type: String,
    required: [true, 'поле "nameEN" должно быть заполнено']
  }
})

exports.Movie = mongoose.model('movie', movieSchema);