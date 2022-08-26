const Router = require('express');
const router = Router();

const writerCtrl = require('../controller/writer.controller')

router.get('/movies/writers', writerCtrl.getWriter);
router.post('/movies/writers', writerCtrl.postWriter);


module.exports = router;