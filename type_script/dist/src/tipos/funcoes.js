"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saudacao = void 0;
function saudacao() {
    const manha = new Date().getHours() < 12;
    return manha ? 'Bom dia' : 'Boa tarde';
}
exports.saudacao = saudacao;
