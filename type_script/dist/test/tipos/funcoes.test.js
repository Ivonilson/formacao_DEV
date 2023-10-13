"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcoes_1 = require("../../src/tipos/funcoes");
test('Deve retornar uma saudação baseada na hora atual', () => {
    const s = (0, funcoes_1.saudacao)();
    expect(s).toBe('Bom dia');
});
