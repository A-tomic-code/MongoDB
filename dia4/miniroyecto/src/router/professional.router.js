const Router = require('express');
const router = Router();

const professionalCtrl = require('../controller/professional.controller')

router.get('/professionals', professionalCtrl.getProfessional);
router.post('/professionals', professionalCtrl.postProfessional);
router.put('/professionals', professionalCtrl.putProfessional);
router.delete('/professionals', professionalCtrl.deleteProfessional);

module.exports = router