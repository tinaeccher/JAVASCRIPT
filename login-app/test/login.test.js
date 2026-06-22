import {realizarLogin} from '..src/login.js';
import assert from 'node:assert';

describe('Testes do módulo de Login', () => {
    describe('Testes da função de realizarLogin', () => {
        it('Deve retornar "Logado com sucesso.", quando  o usuário com login e senha fornecida for encontrado', function(){
            //Act
            const resultado = realizarLogin('maria.silva@gmail.com', '123456');

            //Assert
            assert.equal(resultado, 'Logado com sucesso');
        });

        it('Deve retornar "Logado com sucesso.", quando  o usuário com login e senha fornecida não for encontrado', function(){
            //Act
            const resultado = realizarLogin('maria.silva@gmail.com', '123456');
            //assert
            assert.equal(resultado, 'Login não encontrado');
        })
        it('Deve retornar "Usuário não encontrado", quando o usuário fornecido não for encontrado', function(){
            //Act
            const resultado = realizarLogin('maria.silva@gmail.com', '123456');
            //assert
            assert.equal(resultado, 'Usuário não encontrado');
        })
    })
});

/*
    mcdc cobertura de decisão modificada

*/