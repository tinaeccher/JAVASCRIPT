/*
Preciso de uma função capaz de receber o salário de um funcionário e sua senioridade atual (junior, pleno ou senior).
A função terá que aplicar um bônus conforme a senioridade: junior = 50, pleno = 100 e senior = 1000.
A função deve retornar o valor do salário já com bônus embutido.

1. Entradas
+ Salário do funcionário;
+ Senioridade do funcionário;

2. Regras de negócio
+ Salário deve ser um numero decimal positivo;
+ Senioridade deve ser uma string com os seguintes valores: "junior", "pleno" ou "senior";

3. Processamento
+ Bonus junior = salario + 50;
+ Bonus pleno = salario + 100;
+ Bonus senior = salario + 1000;

4. Saídas
Retornar o valor do salário somado com o bonus, conforme a senioridade do funcionário.

*/

export function calcSalarioBonus(salario, senioridade) {
    if(senioridade == "junior") {
        return salario + 50;
        }       
        else if(senioridade == "pleno") {   
            return salario + 100;   
        }
        else if(senioridade == "senior") {
            return salario + 1000;
        }
    }

function validarSenioridade(senioridade) {
    
}