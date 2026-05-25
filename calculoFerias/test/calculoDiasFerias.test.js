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
    it ('Validar ao vender 30 dias de férias tendo o salário mensal de 3000, recebo 3000 reais', function () {
               //ARRANGE
        const salarioMensal = 3000;
        const diasVendidos = 30;
   
    //ACT
        const valorAReceber = calculoDiasFerias(salarioMensal, diasVendidos);        

    //ASSERT
        assert.equal(valorAReceber, 3000);
    
    });
    it ('Validar ao vender 30 dias de férias tendo o salário mensal de 3000, recebo 3000 reais', function () {
               //ARRANGE
        const salarioMensal = 3000;
        const diasVendidos = 31;
   
    //ACT
        const valorAReceber = calculoDiasFerias(salarioMensal, diasVendidos);        

    //ASSERT
        assert.throws(
            function() { calculoDiasFerias(salarioMensal, diasVendidos); },
            { message: "Quantidade de dias vendidos inválida. Deve ser um valor entre 1 e 30." }
        );
        
    it ('Validar ao vender 0 dias de férias tendo o salário mensal de 3000, recebo 3000 reais', function () {
               //ARRANGE
        const salarioMensal = 3000;
        const diasVendidos = 0;
   
    //ACT
        const valorAReceber = calculoDiasFerias(salarioMensal, diasVendidos);        

    //ASSERT
        assert.throws(
            function() { calculoDiasFerias(salarioMensal, diasVendidos); },
            { message: "Quantidade de dias vendidos inválida. Deve ser um valor entre 1 e 30." }
        );
    
    });
        
});
/*corrigir node*/