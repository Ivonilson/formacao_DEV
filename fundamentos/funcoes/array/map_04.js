const carrinho = [
    {nome: 'Caneta', quant: 10, preco: 7.99 },
    {nome: 'Impressora', quant: 4, preco: 649.50 },
    {nome: 'Caderno', quant: 4, preco: 27.10 },
    {nome: 'Lápis', quant: 3, preco: 5.82},
    {nome: 'Tesoura', quant: 1, preco: 19.20},
]

const apenasNome = produto => produto.nome
const calcularTotal = produto => produto.quant * produto.preco

console.log(carrinho.map(apenasNome))
console.log (carrinho.map(calcularTotal))