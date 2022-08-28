const table = document.querySelector('table');
const form = document.querySelector('form');

const input_id = document.getElementById('id')

const input_title = document.getElementById('title');
const input_anyo = document.getElementById('anyo');
const input_producer = document.getElementById('producer');
const input_language = document.getElementById('language');
const input_genre = document.getElementById('genre');
const input_actors = document.getElementById('actors');
const input_directors = document.getElementById('directors');
const input_writers = document.getElementById('writers');

const base_url = "http://localhost:5555/movies"

function parseFormData() {

    let title = input_title.value;
    let anyo = input_anyo.value;
    let producer = input_producer.value;
    let language = input_language.value;
    let genre = input_genre.value;
    let actors = input_actors.value;
    let directors = input_directors.value;
    let writers = input_writers.value;

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

function parseRowData(row){
    let id = row.getAttribute('id');
    
    let table_columns = document.getElementById(id).children;

    input_title.value = table_columns[0].innerHTML;
    input_anyo.value = table_columns[1].innerHTML;
    input_producer.value = table_columns[2].innerHTML;
    input_language.value = table_columns[3].innerHTML;
    input_genre.value = table_columns[4].innerHTML;
    input_actors.value = table_columns[5].innerHTML;
    input_directors.value = table_columns[6].innerHTML;
    input_writers.value = table_columns[7].innerHTML;
    input_id.value = table_columns[9].innerHTML;

    console.log(id)
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

    let HTML_tabla = 
    `
        <tr>
            <th>Título</th>
            <th>Año de estreno</th>
            <th>Productor</th>
            <th>Idioma</th>
            <th>Genero</th>
            <th>Actores</th>
            <th>Directores</th>
            <th>Guionistas</th>
            <th>Editar</th>
            <th class="table-id">ID</th>
        </tr>
    `

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            if(!id){

                data.data.forEach( ( movie => {
    
                    HTML_tabla += 
                    `
                        <tr id="${movie._id}" onclick="parseRowData(this)">
                            <td>${movie.title}</td>
                            <td>${movie.year}</td>
                            <td>${movie.producer}</td>
                            <td>${movie.language}</td>
                            <td>${movie.genre}</td>
                            <td>${movie.actor_names.join(', ')}</td>
                            <td>${movie.director_names.join(', ') }</td>
                            <td>${movie.writer_names.join(', ') }</td>
                            <td>
                                <button class="btn btn-outline-success" onclick="parseRowData('${movie._id}')">Editar</button>
                            </td>
                            <td class="table-id">${movie._id}</td>
                        </tr>
                    `
                }));

            }else{

                HTML_tabla +=
                    `
                        <tr id="${data.data._id}" onclick="parseRowData(this)">
                            <td>${data.data.title}</td>
                            <td>${data.data.year}</td>
                            <td>${data.data.producer}</td>
                            <td>${data.data.language}</td>
                            <td>${data.data.genre}</td>
                            <td>${data.data.actor_names}</td>
                            <td>${data.data.director_names}</td>
                            <td>${data.data.writer_names}</td>
                            <td>
                                <button class="btn btn-outline-success" onclick="parseRowData('${data.data._id}')">Editar</button>
                            </td>
                            <td class="table-id">${data.data._id}</td>
                        </tr>
                    `
            }
 
            table.innerHTML = HTML_tabla;
        });

        form.reset()

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