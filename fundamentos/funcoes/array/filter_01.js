const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const pares = (numero) => numero % 2 == 0

const resultado = nums.filter(pares)

console.log(resultado)