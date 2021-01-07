const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    year: { type: String, required: true },
    director: { type: String, required: true },
    rating: { type: String, required: true },
    poster: {type: String, required: true},
    count: { type: Number, required:true }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;