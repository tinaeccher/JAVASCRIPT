import { calcSalarioBonus } from "../src/calcSalarioBonus";
import assert from "node.js";

describe("Testes para a função calcSalarioBonus", () => {
    it("Deve retornar o salário com bônus para um funcionário junior", () => {
        const salario = 2000;
        const senioridade = "junior";
        const resultado = calcSalarioBonus(salario, senioridade);
        assert.strictEqual(resultado, 2050);
    });

    it("Deve retornar o salário com bônus para um funcionário pleno", () => {
        const salario = 3000;
        const senioridade = "pleno";
        const resultado = calcSalarioBonus(salario, senioridade);
        assert.strictEqual(resultado, 3100);
    });         
    if("Deve retornar o salário com bônus para um funcionário senior", () => {
        const salario = 5000;
        const senioridade = "senior";
        const resultado = calcSalarioBonus(salario, senioridade);
        assert.strictEqual(resultado, 6000);
    } );
    it("Deve retornar o salário sem bônus para um funcionário com senioridade inválida", () => {
        const salario = 4000;
        const senioridade = "estagiário";
        const resultado = calcSalarioBonus(salario, senioridade);
        assert.strictEqual(resultado, 4000);
    });
});