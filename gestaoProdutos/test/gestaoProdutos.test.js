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
     it('Deve retornar o último produto cadastrado na lista', () => {
        //ARRANGE - entradas e saídas da função
        const produtoASerCadastrado = 'Tenis';
        const ultimoProduto = 'Tenis';
        
        //ACT - CHAMADA DA FUNÇÃO
        const retornoDaFuncao = adicionarProduto(produtoASerCadastrado);

        //ASSERT - VERIFICAÇÃO DO RESULTADO
        assert.strictEqual(retornoDaFuncao, ultimoProduto);
    });
    
     it('Validar que um erro é apresentado ao passar o valor vazio do produto', () => {
        //ARRANGE - entradas e saídas da função
        const produtoASerCadastrado = '';
                
        //ACT e Asserts - CHAMADA DA FUNÇÃO e verificação
        assert.throws(
            function () {
                adicionarProduto(produtoASerCadastrado) },
            { message: 'Informe um produto válido'}
        );
        });

});
