const professionalsCtrl = require("../controller/professionals.controller");
const Router = require("express");
const router = Router();

/// endpoints aqui

router.get("/professionals", professionalsCtrl.getProfessionals);

router.post("/professionals", professionalsCtrl.postProfessionals);

router.put("/professionals", professionalsCtrl.putProfessionals);

router.delete("/professionals", professionalsCtrl.deleteProfessionals);

module.exports =  router;