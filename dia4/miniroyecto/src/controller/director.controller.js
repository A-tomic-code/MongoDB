const mongoose = require("mongoose");
const professionalSchema = require("../models/movie.schema");

function getDirector(req, res){
    let idPelicula = req.query.idPelicula;

    if(idPelicula){
        professionalSchema.aggregate(
            [
                {
                    $match : 
                        {
                             '_id' : new mongoose.Types.ObjectId(idPelicula),
                        }
                },

                {
                    $project : 
                        {
                            '_id' : 0,
                            'directores' : '$director_names'

                        }
                }
            ]
        )

        .then ( (result) => {
            console.log(result)

            response = {
                error: false,
                code: 200,
                message: "Collection OK !!",
                data: result,
              };

            res.send(response)
        })

    }else{

        professionalSchema.aggregate(
            [
                {
                    $project : 
                        {
                            '_id' : 0,
                            'directores' : '$director_names'
                        }
                }
            ]
        )

        .then ( (result) => {
            console.log(result)

            response = {
                error: false,
                code: 200,
                message: "Collection OK !",
                data: result,
              };

            res.send(response)
        })
    }
}

function postDirector (req, res) {
    let id = req.body.id;
     
    let director_name = req.body.name;

    professionalSchema.findByIdAndUpdate(
        {_id: id},

        {
            '$push' : {
                        'director_names' : { '$each' : [director_name] }
                    }
        }

    )
    .then ( (result) => {
        console.log(result);

        response = {
            error: false,
            code: 200,
            message: "Insertion OK !",
            data: result,
          };

          res.send(response)
    });

}

function deleteDirector(req, res) {
    let response;

    let id = req.body.id;
    let director_name = req.body.name;

    professionalSchema.findByIdAndUpdate(
        { _id: id },

        {
            '$pull': { 'director_names': director_name }
        }
    )

        .then((result) => {
            console.log(result);

            response = {
                error: false,
                code: 200,
                message: "DELETE DIRECTOR OK !",
                data: result,
            };

            res.send(response)
        });
}

module.exports = {getDirector, postDirector, deleteDirector}