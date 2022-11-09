const express =require('express')
const router = express.Router()
const districtController =require('../Controllers/districtController')
const weatherController = require('../Controllers/weatherController')
const memeController = require('../Controllers/memeController')

router.get('/districtController',districtController.district)
router.get('/weatherController',weatherController.weather)
router.get('/weatherControllertemp',weatherController.weathertemp)
router.get('/weathertempincrease',weatherController.weathertempincrease)
router.post('/memeController',memeController.memes)
router.post('/makememe',memeController.makememe)

module.exports = router