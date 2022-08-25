const mongoose = require('mongoose');
const movieSchema = require('../models/movie.schema');

function getProfessional(req, res) {
    let response;

    let id = req.query.id

    if (id) {
        movieSchema.findById(id)

            .then((result) => {
                console.log(result);

                response =
                {
                    error: false,
                    code: 200,
                    message: 'Collection OK !',
                    data: result
                }

                res.send(response);
            })
    } else {
        movieSchema.find()

            .then((result) => {
                console.log(result);

                response =
                {
                    error: false,
                    code: 200,
                    message: 'Collection OK !',
                    data: result
                }

                res.send(response);
            })
    }
}

function postProfessional(req, res) {
    let response;

    let title = req.body.title;
    let year = req.body.year;
    let genre = req.body.genre;
    let language = req.body.language;
    let actor_names = req.body.actor_names;
    let writer_names = req.body.writer_names;
    let director_names = req.body.director_names;
    let team = req.body.team; //! [{}] array de json


    movieSchema.create(
        {
            title: title,
            year: year,
            genre: genre,
            language: language,
            actor_names: actor_names, //! [String]
            writer_names: writer_names, //! [String]
            director_names: director_names, //! [String]
            team: team //! [{}]
        }
    )
        .then((result) => {
            console.log(result);

            response =
            {
                error: false,
                code: 200,
                message: 'Insetion OK !',
                data: result
            }

            res.send(response)
        })

}

module.exports = { getProfessional, postProfessional }