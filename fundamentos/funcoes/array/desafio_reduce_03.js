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

const media = (acl, valor) => {
    const quant = acl.quant + 1
    const total = acl.total + valor

    return {quant, total, media: total / quant}
}


const resultado = carrinho.filter(prod_fragil).map(valorProdFrageis).reduce(media, {quant: 0, total: 0, media: 0})

console.log(resultado.media)


// informar o valor médio dos produtos frágeis
//utilizar pela ordem: filter, map, reduce
//1: fragil: true
//2: quant + preco -> total
//3: media totais