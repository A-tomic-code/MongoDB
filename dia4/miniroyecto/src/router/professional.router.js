const Router = require('express');
const router = Router();

const professionalCtrl = require('../controller/professonal.controller')

router.get('/professional', professionalCtrl.getProfessional)
router.post('/professional', professionalCtrl.postProfessional)


module.exports = router;