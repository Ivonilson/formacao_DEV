letras = [
    {letra:'A'},
    {letra:'G'},
    {letra:'N'},
    {letra:'E'},
    {letra:'S'}
]

const juntarLetras = (e, b) => e + b.letra

console.log(letras.reduce(juntarLetras, ''))