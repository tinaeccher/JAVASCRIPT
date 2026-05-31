import {retornarProduto, adicionarProduto} from '../src/gestaoProdutos.js';
import assert from 'node:assert';

describe('Testes de Gestao de Produtos', () => {
    it('Deve retornar o produto correto para um índice válido', () => {
        //ARRANGE - entradas e saídas da função
        const indice = 0;
        const produtoEsperado = 'trakinas';
        
        //ACT - CHAMADA DA FUNÇÃO
        const resultado = retornarProduto(indice);

        //ASSERT - VERIFICAÇÃO DO RESULTADO
        assert.strictEqual(resultado, produtoEsperado);
    });
});
