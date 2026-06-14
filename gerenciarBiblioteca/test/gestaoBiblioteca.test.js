import { buscarTituloDoLivroPorID } from "../src/gestaoBiblioteca.js";
import assert from 'node:assert';

describe('Testando funções da Gestão de Biblioteca', function() {
    it('Validar o Título do ultimo livro cadastrado', function() {
        
        //Act - agir - passando as entradas necessárias para armazenamento
        const retornoDaFuncao = buscarTituloDoLivroPorID(5);

        //ASSERT - 
        assert.equal(retornoDaFuncao, 'Explore it!');
    });
});
