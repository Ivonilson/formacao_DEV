export function saudacao(): string {
    const manha = new Date().getHours() < 12;
    return manha ? 'Bom dia' : 'Boa tarde';
}