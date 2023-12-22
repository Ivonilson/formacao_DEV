const carrinho = [
    {nome: 'Caneta', quant: 10, preco: 7.99, fragil: false },
    {nome: 'Caderno', quant: 4, preco: 27.10, fragil: false },
    {nome: 'Computador', quant: 2, preco: 5000, fragil: true },
    {nome: 'Lápis', quant: 3, preco: 5.82, fragil: false},
    {nome: 'iPad', quant: 2, preco: 7500, fragil: true },
    {nome: 'Tesoura', quant: 1, preco: 19.20, fragil: false},
    {nome: 'Impressora', quant: 5, preco: 1000, fragil: true }
]
const prod_fragil = (produto) => produto.fragil == true
const valorProdFrageis = (produto) => produto.quant * produto.preco

const media = (total, valor, indice, array) => {
    const tamanho = array.length
    const ultimo = tamanho - 1 == indice
    const resultado = total + valor
    return ultimo ? resultado / tamanho : resultado
}

const resultado = carrinho
    .filter(prod_fragil)
    .map(valorProdFrageis)
    .reduce(media)

console.log(resultado)
