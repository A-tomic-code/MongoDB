const Router = require('express');
const router = Router();

const testsCtrl = require('../controller/tests.controller');

router.post('/test', testsCtrl.test);


module.exports = router