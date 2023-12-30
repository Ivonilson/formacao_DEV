const primeiroElemento = array => array[0]
const primeiraLetra = texto => texto[0]

const promessa = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(array => primeiroElemento(array))
    .then(elemento => primeiraLetra(elemento))
    .then(letra => console.log(letra))

console.log('Fim')