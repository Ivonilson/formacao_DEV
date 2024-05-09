const primeiroElemento = array => array[0]
const primeiraLetra = texto => texto[0]
const letraMinuscula = texto => texto.toLowerCase();

const promessa = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

console.log('Fim')