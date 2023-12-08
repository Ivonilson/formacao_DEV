const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99 },
    {nome: 'Impressora', qtd: 0, preco: 649.50 },
    {nome: 'Caderno', qtd: 4, preco: 27.10 },
    {nome: 'Lápis', qtd: 0, preco: 5.82},
    {nome: 'Tesoura', qtd: 1, preco: 19.20},
]

const qtdMaiorQueZero = produto => produto.qtd > 0;
const apenasNome = produto => produto.nome

const carrinhoFinal = carrinho.filter(qtdMaiorQueZero).map(apenasNome)

console.log(carrinhoFinal)