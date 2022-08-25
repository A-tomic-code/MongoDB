const photoSchema = require("../models/photo.schema");

function getPhoto(req, res) {
  let response;

  let username = req.query.username;

  if (username) {
    photoSchema
      .find({ username: username })

      .then((result) => {
        console.log(result);
        res.send(result);
      });
  } else {
    photoSchema
      .find({})

      .then((result) => {
        console.log(result);

        response = {
          error: false,
          code: 200,
          message: "Data successfully collected",
          data: result,
        };

        res.send(response);
      });
  }
}

function postPhoto(req, res) {
  let response;

  let username = req.body.username.length ? req.body.username : "noUserName";
  let url = req.body.url ? req.body.url : "noURL";
  let title = req.body.title ? req.body.title : "noTitle";
  let description = req.body.description
    ? req.body.description
    : "noDescription";

console.log(url)

  photoSchema
    .create({
      username: username,
      title: title,
      url: url,
      description: description,
    })

    .then((result) => {
    //   console.log(result);

      response = {
        error: false,
        code: 200,
        message: "Data successfully wroten",
        data: result,
      };

      res.send(response);
    });
}

function putPhoto(req, res) {
  let response;

  let username = req.body.username ? req.body.username : "noUserName";
  let url = req.body.url ? req.body.url : "noURL";
  let title = req.body.title ? req.body.title : "noTitle";
  let description = req.body.description
    ? req.body.description
    : "noDescription";

  let id = req.body.id ? req.body.id : -1;

  if (id != -1) {
    photoSchema
      .findOneAndUpdate(
        { _id: id }, //la busqueda

        {
          username: username, //  la actualizacion
          url: url, 
          title: title, 
          description: description, 
        }
      )

      .then((result) => {

        response = {
          error: false,
          code: 200,
          message: "Data successfully modified",
          data: result,
          
        }
        
        res.send(response);
      });
  } else {

    response = {
      error: true,
      code: 400,
      message: "Missing ID",
      data: req.body,
    };

    res.send(response);
  }

}

function deletePhoto(req, res) {
  let response;

  let id = req.body.id ? req.body.id : -1;

  if(id != -1){
    photoSchema.findByIdAndDelete(id)

    .then( (result) => {
        console.log(result);

        response = {
            error: false,
            code: 200,
            message: "Data successfully deleted",
            data: req.body,
          };

        res.send(response);
    })

  }else {

    response = {
        error: true,
        code: 400,
        message: "Missing ID",
        data: req.body,
      };

    res.send(response);
  }
}

module.exports = { getPhoto, postPhoto, putPhoto, deletePhoto };
