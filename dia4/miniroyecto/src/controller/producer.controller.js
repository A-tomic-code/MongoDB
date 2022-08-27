const mongoose = require("mongoose");
const professionalSchema = require("../models/movie.schema");

function getProducer(req, res) {
    let idPelicula = req.query.idPelicula;

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
                    'productor': '$producer'
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
}

module.exports = { getProducer }