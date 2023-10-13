const VendaStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada'
} as const

//VendaStatus.INICIADA = '123'; // não pode ser alterada porque foi marcada como somente leitura (as const)

console.log(VendaStatus.INICIADA);