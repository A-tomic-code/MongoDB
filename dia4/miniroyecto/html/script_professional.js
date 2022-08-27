const table = document.querySelector('table');
const input_id = document.getElementById('id')

const base_url = "http://localhost:5555/professionals"

function parseFormData() {

    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let age = document.getElementById('age').value;
    let profesion = document.getElementById('profesion').value;

    let professional = new Professional(first_name, last_name, age, profesion);

    console.info('Professional object parsed from form');
    console.info(professional);

    return professional
}

function consultar() {
    let url = base_url;
;
    let id = input_id.value

    if (id) {
        url += `?id=${id}`
    }

    const params = {
        headers: { 'content-type': 'application/json' },
        method: 'GET'
    }

    let HTML_tabla = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Profesion</th>
        </tr>`

    fetch(url, params)
        .then((result) => {
            return result.json()
        })
        .then((data) => {

            
            if(!id){
                data.data.forEach((professional => {
                    console.log(professional)

                    HTML_tabla +=
                        `
                    <tr>
                        <td>${professional._id}</td>
                        <td>${professional.first_name}</td>
                        <td>${professional.last_name}</td>
                        <td>${professional.age}</td>
                        <td>${professional.profesion}</td>

                    </tr>
                `
                }));
            }else{

                HTML_tabla +=
                    `
                    <tr>
                        <td>${data.data._id}</td>
                        <td>${data.data.first_name}</td>
                        <td>${data.data.last_name}</td>
                        <td>${data.data.age}</td>
                        <td>${data.data.profesion}</td>
                    `
                  
            }

            table.innerHTML = HTML_tabla;
        });

}

function modificar() {
    let id = input_id.value;

    let professional = parseFormData();

    if (id) {

        let req_body = JSON.parse(JSON.stringify(professional));
        req_body.id = id;

        console.log(req_body);

        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(req_body),
            method: 'PUT'
        }

        fetch(base_url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                console.log(data)
                alert(data.message)
            })
            .catch((e) => {
                alert('ERROR >> ' + e.message);
            })

    } else {
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar()
}

function crear() {
    let professional = parseFormData();

    const params = {
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(professional),
        method: 'POST'
    }

    console.log(params.body)

    fetch(base_url, params)
        .then((data) => {
            return data.json()
        })
        .then((result) => {
            alert(result.message)
        })
        .catch((e) => {
            alert('ERROR >> ' + e.message)
        })

    consultar()
}

function borrar() {
    let ID = input_id.value;

    if (ID) {
        const params = {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: ID }),
            method: 'DELETE'
        }

        fetch(base_url, params)
            .then((result) => {
                return result.json()
            })
            .then((data) => {
                console.log(data);
                alert(data.message)
            })
    } else {
        alert('No se puede realzar la operacion --> FALTA EL TARGET ID O NO ES VALIDO')
    }

    consultar();
}