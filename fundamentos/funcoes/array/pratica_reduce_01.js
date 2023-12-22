const carrinho = [
    {nome: 'Caneta', quant: 10, preco: 7.99, fragil: false },
    {nome: 'Caderno', quant: 4, preco: 27.10, fragil: false },
    {nome: 'Computador', quant: 2, preco: 5000, fragil: true },
    {nome: 'Lápis', quant: 3, preco: 5.82, fragil: false},
    {nome: 'iPad', quant: 2, preco: 7500, fragil: true },
    {nome: 'Tesoura', quant: 1, preco: 19.20, fragil: false},
    {nome: 'Impressora', quant: 5, preco: 1000, fragil: true }
]

const produtos_frageis = (produto) => produto.fragil == true
const totalizador_produtos_frageis = (produto) => produto.quant * produto.preco

const media = (acumulador, valor) => {
    const contador = acumulador.contador + 1
    const total = acumulador.total + valor
    
    return {contador: contador, total: total, media: total / contador}
}

console.log(carrinho.filter(produtos_frageis).map(totalizador_produtos_frageis).reduce(media, {contador: 0, total: 0, media: 0}));