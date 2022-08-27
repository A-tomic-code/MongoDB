const Router = require('express');
const router = Router();

const actorCtrl = require('../controller/actor.controller')

router.get('/movies/actors', actorCtrl.getActor);
router.post('/movies/actors', actorCtrl.postActor);
router.delete('/movies/actors', actorCtrl.deleteActor)

module.exports = router;