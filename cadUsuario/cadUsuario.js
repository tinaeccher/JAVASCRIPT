//criar um vetor pessoas com as propriedades:
//  nome, idade e salário.
//Mostrar na tela o nome a idade quando o salário for maior 3500
const pessoas =[
    {
        nome: "Maria da Silva",
        idade: 45,
        salario: 2600.00
    },
    {
       nome: "João Junior",
       idade: 36,
       salario: 3500.00
    },
    {
        nome: "Pedro Fernando",
        idade: 55,
        salario: 7500.00
    },
    {
        nome: "Luiz Fernando",
        idade: 40,
        salario: 9500.00
    }
]
for(let i =0; i < pessoas.length; i++){ 
    //por que utilizamos for? para saber o numero de um elemento
    //quando quero ter condição específica
    //alterar a ordem
    if (pessoas[i].salario > 3500){
        console.log(pessoas[i].nome, pessoas[i].idade)
        //template string 
    }
}
//for each espera que passe uma função anônima dentro dele
//foreach é uma função que esta dentro de uma lista
//foreach eespera que a funcao anonima tenha um parametro que represente o item atual
pessoas.forEach(function(pessoa){
    console.log(pessoa.nome, pessoa.idade)
    //template string

})