const photoCtrl = require("../controller/photos.controller");
const Router = require("express");
const router = Router();

/// endpoints aqui

router.get("/photo", photoCtrl.getPhoto);

router.post("/photo", photoCtrl.postPhoto);

router.put("/photo", photoCtrl.putPhoto);

router.delete("/photo", photoCtrl.deletePhoto);

module.exports =  router;