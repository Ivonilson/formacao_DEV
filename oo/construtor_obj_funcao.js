function Aluno (nome, sobrenome) {

    this.nome = nome,
    this.sobrenome = sobrenome,
    this.maiuscula =  () => {
        return `${this.nome.toUpperCase()} ${this.sobrenome.toUpperCase()}` 
    }
}

const nome1 = new Aluno('joao', 'silva')
const nome2 = new Aluno('Maria', 'Silva')

console.log(nome1.maiuscula())
console.log(nome2.maiuscula())