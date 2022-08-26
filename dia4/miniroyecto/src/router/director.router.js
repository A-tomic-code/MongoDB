const Router = require('express');
const router = Router();

const directorCtrl = require('../controller/director.controller');

router.get('/movies/directors', directorCtrl.getDirector);
router.post('/movies/directors', directorCtrl.postDirector);

module.exports = router;