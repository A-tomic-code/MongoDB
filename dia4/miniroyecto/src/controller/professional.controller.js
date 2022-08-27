const mongoose = require('mongoose');
const professionalSchema = require('../models/professional.schema');

function getProfessional(req, res) {
    let response;
    let id = req.query.id;

    if (id) {
        professionalSchema.findById(id)
            .then((result) => {

                response = {
                    error: false,
                    code: 200,
                    message: 'Collection OK !',
                    data: result
                }

                res.send(response);
            })

    } else {
        professionalSchema.find({})
            .then((result) => {
                response = {
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
    let response

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let age = req.body.age;
    let profesion = req.body.profesion;

    professionalSchema.create({
        first_name: first_name,
        last_name: last_name,
        age: age,
        profesion: profesion
    })
        .then((result) => {
            response = {
                error: false,
                code: 200,
                message: 'Insertion OK !',
                data: result
            }

            res.send(response);
        })
}

function putProfessional(req, res) {
    let response

    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let age = req.body.age;
    let profesion = req.body.profesion;

    let id = req.body.id;

    if (id) {
        professionalSchema.findByIdAndUpdate(id,
            {
                first_name: first_name,
                last_name: last_name,
                age: age,
                profesion: profesion
            })
            .then((result) => {
                response = {
                    error: false,
                    code: 200,
                    message: 'Modification OK !',
                    data: result
                }

                res.send(response);
            })
    }
}

function deleteProfessional(req, res) {
    let response;

    let id = req.body.id;

    if (id) {
        professionalSchema.findByIdAndRemove(id)
            .then((result) => {
                response = {
                    error: false,
                    code: 200,
                    message: 'DELETION OK',
                    data: result
                }

                res.send(response);
            })
    }
}

module.exports = { getProfessional, postProfessional, putProfessional, deleteProfessional }