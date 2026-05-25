import calculoDiasFerias from '../src/calculoDiasFerias.js';
import assert from 'node:assert';

describe('Testes para a função calculoDiasFerias', function() { 
    it.only('Validar ao vender 1 dia de férias tendo o salário mensal de 3000, recebo 100 reais', function () {
       //ARRANGE
        const salarioMensal = 3000;
        const diasVendidos = 1;
   
    //ACT
        const valorAReceber = calculoDiasFerias(salarioMensal, diasVendidos);        

    //ASSERT
        assert.equal(valorAReceber, 100);
    
    });
});
/*corrigir node*/