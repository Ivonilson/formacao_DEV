class Data {
   
    /**Passando os valores diretamente nas variáveis. As variáveis estão comentadas, pois
     * os valores estão sendo passados por parâmetro no método construtor da classe
     */
   // dia = 1
   // mes = 1
  // ano = 1970

  /**Método construtor da classe */
    constructor (dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    formatar () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 1970)

console.log(data1.formatar())