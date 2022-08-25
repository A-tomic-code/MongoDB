const movieSchema = require('../models/movie.schema');

function test (req, res){

    let team = [];

    let actor1 = {
        first_name: 'Actorcito',
        last_name: 'suerte',
        age: 44
    } 

    team.push(actor1)

    let actor2 = {
        first_name: 'Actorzote',
        last_name: 'suerte porfavor',
        age: 32
    }
    
    team.push(actor2)

    let guionista1 = {
        first_name: 'guionista bueno',
        last_name: 'suerte 7777',
        age: 44
    }

    team.push(guionista1)

    let guionista2 = {
        first_name: 'guionista regular',
        last_name: 'suerte vamos',
        age: 32
    }

    team.push(guionista2)

    let director1 = {
        first_name: 'directorcito',
        last_name: 'necesito suerte',
        age: 44
    }

    team.push(director1)

    let director2 = {
        first_name: 'directorzote',
        last_name: 'suerte porfavor',
        age: 32
    }

    team.push(director2)

    let movie = new movieSchema(
        {
            title: 'Harry Potter',
            year: 2000,
            genre: 'Sci-fi',
            language: 'en',
            actor_names: ['actor1.first_name', 'actor2.first_name'],
            writer_names: ['guionista1.first_name', 'guionista2.first_name'],
            director_names: ['director1.first_name', 'director2.first_name'],
            team: team
        }
    )

    res.send(movie)
}

module.exports = {test}