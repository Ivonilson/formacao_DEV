function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve()
        }, tempo)
    })
}

async function executar() {
    await esperarPor()
    console.log("Depois de 2s...")

    await esperarPor(3000)
    console.log('Depois de 3s...')
}

executar()

