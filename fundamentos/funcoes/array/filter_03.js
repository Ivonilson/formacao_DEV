Array.prototype.meuFilter = function (fn){
    if (typeof fn !== 'function') return []
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const numeros = [1, 2, 3, 4, 5, 5, 5]
const maiorQueOuIgualA4 = numero => numero >= 4
const numeroIgualA5 = numero => numero == 5

const resultado = numeros.meuFilter(numeroIgualA5)
console.log(resultado)