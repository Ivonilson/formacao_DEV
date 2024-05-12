// Callback aninhadas (Callback Hell)

setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function(){
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

//promise
function esperarPor (tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor(2000))
    .then(() => esperarPor(2000))
    .then(() => esperarPor(2000))