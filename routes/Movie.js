const express = require('express');
const movieController = require("../controllers/movieController")
const router = express.Router(); 

router.get('/', movieController.allMovies);
router.get('/:id',movieController.movideById);
router.post('/',movieController.addMovie);
router.put('/:id',movieController.updateMovie);
router.delete('/:id',movieController.deleteMovie);




module.exports = router