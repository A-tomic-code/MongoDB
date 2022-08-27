const Router = require('express');
const router = Router();

const producerCtrl = require('../controller/producer.controller')

router.get('/movies/producer', producerCtrl.getProducer)

module.exports = router;