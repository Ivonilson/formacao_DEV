import { saudacao } from "../../src/tipos/funcoes";

test('Deve retornar uma saudação baseada na hora atual', () => {
    const s = saudacao()
    expect(s).toBe('Bom dia');
});