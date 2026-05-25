/*
Preciso de uma função que seja capaz de permitir que o usuário venda dias de suas férias.
Basicamente os dias de férias são calculados com base no valor bruto do salário mensal 
(sempre contando com 30, independente da qtde de dias no mês). Logo, um funcionários que ganha
3000 por mês e quer vender 1 dia de férias, vai receber 100 reais por esse dia (3000 / 30 = 100). 

Entradas:
+ Valor do salário mensal
+ Quantidade de dias de férias vendidos

Regras:
+ Salário é um valor decimal positivo
+ Quantidade de dias vendidos é um valor inteiro positivo entre 1 e 30

Processamento:
1. Calcular o valor do dia de férias (salário mensal / 30)
2. Calcular o valor total recebido (valor do dia * quantidade de dias vendidos)

Saídas:
+ Valor diário recebido por cada dia de férias vendido
+ Valor total recebido pelas férias vendidas
*/

export function calculoDiasFerias(salarioMensal, diasVendidos){
    //Regras
    if (diasVendidos < 1 || diasVendidos > 30) {
        throw new Error("Quantidade de dias vendidos inválida. Deve ser um valor entre 1 e 30.");
        //throw é de lançar um novo erro em tela
    }
    //Processamento
    const valorPeloDiaFerias = salarioMensal / 30;
        return valorPeloDiaFerias * diasVendidos;
    }
    console.log(calculoDiasFerias(3000, 31));
