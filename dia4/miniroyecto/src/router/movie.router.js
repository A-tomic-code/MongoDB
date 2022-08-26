const Router = require('express');
const router = Router();

const movieCtrl = require('../controller/movie.controller')

router.get('/movies', movieCtrl.getMovie)
router.post('/movies', movieCtrl.postMovie)
router.put('/movies', movieCtrl.putMovie)
router.delete('/movies', movieCtrl.deleteMovie)


module.exports = router;