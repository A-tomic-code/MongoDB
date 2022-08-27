const mongoose = require("mongoose");
const movieSchema = require("../models/movie.schema");
const professionalSchema = require("../models/movie.schema");

function getActor(req, res) {
    let idPelicula = req.query.idPelicula;

    if (idPelicula) {
        professionalSchema.aggregate(
            [
                {
                    $match:
                    {
                        '_id': new mongoose.Types.ObjectId(idPelicula),
                    }
                },
                {
                    $project:
                    {
                        '_id': 0,
                        'actores': '$actor_names'
                    }
                }
            ]
        )
            .then((result) => {
                console.log(result)

                response = {
                    error: false,
                    code: 200,
                    message: "Collection OK !!",
                    data: result,
                };

                res.send(response)
            })

    } else {

        professionalSchema.aggregate(
            [
                {
                    $project:
                    {
                        '_id': 0,
                        'actores': '$actor_names'
                    }
                }
            ]
        )
            .then((result) => {
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

function postActor(req, res) {
    let id = req.body.id;

    let actor_name = req.body.name;

    professionalSchema.findByIdAndUpdate(
        { _id: id },

        {
            '$push':
            {
                'actor_names': { '$each': [actor_name] }
            }
        }

    )

        .then((result) => {
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

function deleteActor(req, res) {
    let response;

    let id = req.body.id;
    let actor_name = req.body.name;

    professionalSchema.findByIdAndUpdate(
        { _id: id },

        {
            '$pull': { 'actor_names': actor_name }
        }
    )

    .then((result) => {
        console.log(result);

        response = {
            error: false,
            code: 200,
            message: "DELETE ACTOR OK !",
            data: result,
        };

        res.send(response)
    });
}


module.exports = { getActor, postActor, deleteActor }