import { pegarNomeDoProduto, adicionarProduto } from "../src/gestaoProdutos.js";
import assert from 'node:assert';


describe('Testando funções de gestão de produtos', function ()
{
    it("Validar que posso informar um índice para trazer o nome do produto", function (){
        //ARANGE - O que preciso para testar a função? - Entradas
        const indiceDoProdutoQueQueroTestar = 0;
        const nomeDoProdutoQueEsperoReceber = "Coca-cola";

        //ACT - agir - chamar a função que quero testar, 
        // passando as entradas necessárias e armazenando o resultado em uma variável.
        const retornoDaFuncao = pegarNomeDoProduto(indiceDoProdutoQueQueroTestar);

        //ASSERT - comparar o resultado da função com o resultado esperado, 
        // usando um método de asserção para verificar se eles são iguais. 
        assert.equal(retornoDaFuncao, nomeDoProdutoQueEsperoReceber);
    });

    it("Validar o ultimo produto adicionado do vetor e o nome do produto", function (){
        //ARANGE - O que preciso para testar a função? - Entradas
        const produtoASerCadastrado = {
            nome: 'Macbook Pro',
            preco: 5999.99,
            quantidade: 5
        };
        const nomeQueEsperoReceber = 'Macbook Pro'

        //ACT - Agiir - chamar a função que quero testar,
        const retornoDaFuncao = adicionarProduto(produtoASerCadastrado);

        //ASSERT - comparar o resultado da função com o resultado esperado, 
        //Usando um método de asserção para verificar se eles são iguais. 
        assert.equal(retornoDaFuncao, nomeQueEsperoReceber);
    });
});

    it("Validar que um erro é lançado ao não informar o nome do produto", function (){
        //ARANGE - O que preciso para testar a função? - Entradas
        const produtoASerCadastrado = {
            nome: "",
            preco: 5999.99,
            quantidade: 5
        };  
        //ACT - Agir - chamar a função que quero testar,
        assert.throws(
            function () {
                adicionarProduto(produtoASerCadastrado);
            },
            Error,
            "O nome do produto é obrigatório."
        );
    })