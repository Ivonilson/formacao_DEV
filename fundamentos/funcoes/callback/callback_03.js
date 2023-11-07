const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

console.log(__dirname + '/dados/aprovados.txt')

function lerArquivo (erro, conteudo) {
    if (erro) return
    console.log(conteudo.toString())
}

/**execução assíncrona de leitura */
fs.readFile(caminho, lerArquivo)
console.log('fim #01...')

/**execução síncrona de leitura */
/*const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim #02...')*/




