const router = require("express").Router();
let Movie = require("../models/movie.model");

router.route("/").get((req, res) => {
  Movie.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const filter = { id: req.body.id, title: req.body.title, year: req.body.year, genre: req.body.genre, director: req.body.director, rating: req.body.rating, poster: req.body.poster };
  const update = { $inc: { count: 1 } };

  Movie.findOneAndUpdate(filter, update, { upsert: true })
    .then(() => res.json("Movie updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/top").get((req, res) => {
  Movie.find()
    .sort({ count: -1 })
    .limit(5)
    .then((movies) => res.json(movies))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
