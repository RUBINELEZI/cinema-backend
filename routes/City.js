const express = require('express');
const cityController = require("../controllers/cityController")
const router = express.Router(); 

router.get('/', cityController.allCities);
router.get('/:id',cityController.cityById);
router.post('/',cityController.addCity);
router.put('/:id',cityController.updateCity);
router.delete('/:id',cityController.deleteCity);




module.exports = router