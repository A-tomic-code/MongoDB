const table = document.querySelector('table');
const input_id = document.getElementById('id')

const base_url = "http://localhost:5555/movies"

function parseFormData() {

    let title = document.getElementById('title').value;
    let anyo = document.getElementById('anyo').value;
    let producer = document.getElementById('producer').value;
    let language = document.getElementById('language').value;
    let genre = document.getElementById('genre').value;
    let actors = document.getElementById('actors').value;
    let directors = document.getElementById('directors').value;
    let writers = document.getElementById('writers').value;

    let arr_actors = []
    let arr_directors = []
    let arr_writers = []
    
    actors.split(',').forEach((actor) => {
        actor = actor.trim();
        arr_actors.push(actor);
    });

    directors.split(',').forEach((director) => {
        director = director.trim();
        arr_directors.push(director);

    });

    writers.split(',').forEach((writer) => {
        writer = writer.trim();
        arr_writers.push(writer);
    });


    let movie = new Movie(title, anyo, producer, language, genre, arr_actors, arr_directors, arr_writers);

    console.info('Movie object parsed from form');
    console.info(movie);

    return movie
}

function consultar() {
    let url = base_url;
    let id = input_id.value;

    if (id) {
        url += `?idPelicula=${id}`
    }

    const params = {
        headers: { 'content-type': 'application/json' },
        method: 'GET'
    }

    let HTML_tabla = `
        <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Año de estreno</th>
            <th>Productor</th>
            <th>Idioma</th>
            <th>Genero</th>
            <th>Actores</th>
            <th>Directores</th>
            <th>Guionistas</th>
        </tr>`

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            if(!id){

                data.data.forEach( ( movie => {
    
                    HTML_tabla += 
                    `
                        <tr>
                            <td>${movie._id}</td>
                            <td>${movie.title}</td>
                            <td>${movie.year}</td>
                            <td>${movie.producer}</td>
                            <td>${movie.language}</td>
                            <td>${movie.genre}</td>
                            <td>${movie.actor_names}</td>
                            <td>${movie.director_names}</td>
                            <td>${movie.writer_names}</td>
                        </tr>
                    `
                }));

            }else{

                HTML_tabla +=
                    `
                        <tr>
                            <td>${data.data._id}</td>
                            <td>${data.data.title}</td>
                            <td>${data.data.year}</td>
                            <td>${data.data.producer}</td>
                            <td>${data.data.language}</td>
                            <td>${data.data.genre}</td>
                            <td>${data.data.actor_names}</td>
                            <td>${data.data.director_names}</td>
                            <td>${data.data.writer_names}</td>
                        </tr>
                    `
            }
 
            table.innerHTML = HTML_tabla;
        });

}

function modificar() {
    let id = input_id.value;

    let movie = parseFormData();

    if(id){

        let req_body = JSON.parse( JSON.stringify(movie) );
        req_body.id = id;
        
        console.log(req_body);

        const params = {
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(req_body),
            method: 'PUT'
        }

        fetch(base_url, params)
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            console.log(data)
            alert(data.message)
        })
        .catch( (e) => {
            alert('ERROR >> ' + e.message);
        })

    }else{
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar()
}

function crear(){
    let movie = parseFormData();

    const params = {
        headers: {'content-type':'application/json'},
        body: JSON.stringify(movie),
        method: 'POST'
    }

    console.log(params.body)

    fetch(base_url, params)
    .then( (data) => {
        return data.json()
    })
    .then( (result) => {
        alert(result.message)
    })
    .catch( (e) => {
        alert('ERROR >> ' + e.message)
    })

    consultar()
}

function borrar(){
    let ID = input_id.value;

    if(ID){
        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({id: ID}),
            method: 'DELETE'
        }

        fetch(base_url, params)
        .then( (result) => {
            return result.json()
        })
        .then( (data) => {
            console.log(data);
            alert(data.message)
        })
    } else { 
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar();
}