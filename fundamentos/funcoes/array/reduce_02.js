const carrinho = [
    {nome: 'Caneta', quant: 10, preco: 7.99 },
    {nome: 'Impressora', quant: 4, preco: 649.50 },
    {nome: 'Caderno', quant: 4, preco: 27.10 },
    {nome: 'Lápis', quant: 3, preco: 5.82},
    {nome: 'Tesoura', quant: 1, preco: 19.20},
]

const totalProduto = produto => produto.quant * produto.preco
const totalizar = (total, valor) => total + valor

const precoTotal = carrinho.map(totalProduto).reduce(totalizar);

console.log(precoTotal)