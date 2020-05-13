const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const upload = require('../config/multer.config.js');
const app = express();
fs = require('fs-extra')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// Load Movie model
const Movie = require('../models/movie');

// @route GET api/movies/test
// @trailer tests movies route
// @access Public
router.get('/test', (req, res) => res.send('movie route testing!'));

// @route GET api/movies
// @trailer Get all movies
// @access Public
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviesfound: 'No Movies found' }));
});

// @route GET api/movies/:id
// @trailer Get single movie by id
// @access Public
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({ nomoviefound: 'No Movie found' }));
});

// @route GET api/movies
// @trailer add/save movie
// @access Public
router.post('/', upload.array('posters'), (req, res) => {

  var filenames = req.files.map(function(file) {
    return file.path; // or file.originalname
  });

  var a = (filenames.findIndex(function(item){
    return item.indexOf("poster")!==-1;
  }));

  var b = (filenames.findIndex(function(item){
      return item.indexOf("slide")!==-1;
  }));

  console.log(filenames);
  console.log(movieData);

  var date = new Date(req.body.date);
  var isoString = date.toISOString();

  var movieData = {
    id: req.body.id,
    title: req.body.title,
    synopsis: req.body.synopsis,
    trailer: req.body.trailer,
    OpeningDate: isoString,
    poster:  filenames[a],
    slide: filenames[b]
  };

  let movie = new Movie(movieData);
  console.log(movie);
  movie.save()
    .then(() => res.json({ movie, msg: 'New movie added successfully' }))
    .catch(err => res.status(400).json('Unable to add this movie'))
});

// @route GET api/movies/:id
// @trailer Update movie
// @access Public
router.post('/:id', upload.array('posters'), (req, res) => {
Movie.findByIdAndUpdate(req.params.id)
.then(movie => {
  
    movie.id = req.body.id,
    movie.title = req.body.title,
    movie.synopsis = req.body.synopsis,
    movie.trailer = req.body.trailer

  console.log(req.files);
  console.log(req.files.length);
  if (req.files.length > 0) {
    console.log('hi');
    var filenames = req.files.map(function(file) {
      return file.path; // or file.originalname
    });

    var a = (filenames.findIndex(function(item){
      return item.indexOf("poster")!==-1;
    }));

    var b = (filenames.findIndex(function(item){
        return item.indexOf("slide")!==-1;
    }));

    console.log(a);

    if (a >= 0) {
      movie.poster = filenames[a]
    }

    if (b >= 0) {
      movie.slide = filenames[b]
    }

  }
  console.log(movie);
  movie.save()
  .then(() => res.json({ movie, msg: 'Updated successfully' }))
  .catch(err =>
      res.status(400).json('Unable to update the Database'))
    })
    .catch(err =>
      res.status(400).json('Unable to update the Database'));
});

// @route GET api/movies/:id
// @trailer Delete movie by id
// @access Public
router.delete('/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id)
    .then(() => res.json('Movie entry deleted successfully'))
    .catch(err => res.status(404).json({ error: 'No such a movie' }));
});

module.exports = router;
