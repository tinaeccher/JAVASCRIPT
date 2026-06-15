import { buscarTituloDoLivroPorID } from "../src/gestaoBiblioteca.js";
import assert from 'node:assert';

describe('Testando funções da Gestão de Biblioteca', function() {
    it('Validar que informo o Título do Livro quando informo um ID válido', function() {
        
        //Act - agir - passando as entradas necessárias para armazenamento
        const retornoDaFuncao = buscarTituloDoLivroPorID(5);

        //ASSERT - 
        assert.equal(retornoDaFuncao, 'Explore it!');
    });

    it('Validar que uma msg é apresentada quando um ID não é encontrado,', function() {
        
        //Act - agir - passando as entradas necessárias para armazenamento
        const retornoDaFuncao = buscarTituloDoLivroPorID(9999);

        //ASSERT - 
        assert.equal(retornoDaFuncao, 'ID não encontrado');
    });

    it("Validando que emite mensagem de erro quando o id é Nulo", function(){

        assert.throws(
            function () {buscarTituloDoLivroPorID(null) },
                {
                    message:'O Id precisa ser informado.'
                }
        );
    });

    it("Validando que emite mensagem quando o id não é informado", function(){
        assert.throws(
            function () {buscarTituloDoLivroPorID() },
                {
                    message:'O Id precisa ser informado.'
                }
            );
    });
    it("Validando que emite mensagem quando o id é zero", function(){
        assert.throws(
            function () {buscarTituloDoLivroPorID(0) },
                {
                    message:'O Id precisa ser informado.'
                }
        );
    });
        
});
