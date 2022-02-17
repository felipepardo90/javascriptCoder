// desafío AJAX

document.querySelector('#btnJson').addEventListener('click', comentarios)

function comentarios() {

    const comment = new XMLHttpRequest()
    comment.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true)

    comment.send()

    comment.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let parseComment = JSON.parse(this.responseText)

            let respuesta = document.querySelector('#respuesta')
            respuesta.innerHTML = ''

            for (let item of parseComment) {
                respuesta.innerHTML += `
                <h6>${item.name}</h6>
                <h6>${item.email}</h6>
                <p>${item.body}</p>
                `
            }
        }
    }
}

// El Ejemplo está hecho con un doc JSON de JSON PLACEHOLDER

// PARA VER COMENTARIOS, PRESIONAR EN VER COMENTARIOS