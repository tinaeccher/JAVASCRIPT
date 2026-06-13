const produtos = [

    //constante chamada produto, que é um vetor de objetos,
    //  onde cada objeto representa um produto 
    // cada produto com suas propriedades: nome, preço e quantidade. 
    { 
        //item 1 do vetor produto
        nome: "Coca-cola", //propriedade nome - valor "Coca-cola"
        preco: 5.00, //a virgula é usada para separar as propriedades dentro do objeto, e o ponto é usado para separar a parte inteira da parte decimal do número
        quantidade: 10
    }, //virgula por fora do vetor para separar os objetos dentro do vetor
    {
        //item 2 do vetor produto
        nome: "Pepsi",
        preco: 4.50,
        quantidade: 15
    },
    {
        //item 3 do vetor produto
        nome: "Iphone 14pro",
        preco: 999.99,
        quantidade: 5,
        perifericos: [
            {
                nome: "Carregador",
                preco: 49.99
            },
            {
                nome: "Capa protetora",
                preco: 29.99
            }
        ]
    },
    {   
        //item 4 do vetor produto
        nome: "Notebook Dell",
        preco: 2500.00,
        quantidade: 3,
        cores: ["preto", "prata", "cinza"] //propriedade cores - valor é um vetor de strings representando as cores disponíveis para o notebook
    }
];


/*
produtos[2].marca = 'Apple';
console.log(produto[2]); //imprime o vetor produto no console, mostrando todos os objetos e suas propriedades.
console.log(produto[2].nome); //imprime o vetor produto no console, mostrando todos os objetos e suas propriedades.
*/
/*

//COMO FAZER PARA ATUALIZAR UMA PROPRIEDADE DE UM OBJETO DENTRO DE UM VETOR, 
// MOSTRANDO O VALOR ANTERIOR E O NOVO VALOR NO CONSOLE?


//pegou uma constante e mudou o nome do produto, pegando o valor da propriedade nome do terceiro objeto do vetor produtos 
//e armazenando na constante nomeAtual.
const nomeAtual = produto[1].nome; 
 //mudou o valor da propriedade nome do terceiro objeto do vetor produtos para "Novo nome"
produto[1].nome = 'Iphone 15 Pro';
//pegou o valor da propriedade nome do terceiro objeto do vetor produtos novamente e armazenando na constante novoNome.
const novoNome = produto[1].nome;

//imprime o valor da variável nomeAtual no console, que é o nome do produto antes da alteração.
console.log(nomeAtual + 'mudou para' + novoNome); 
console.log(produto);
*/

//COMO FAZER PARA ADICIONAR UM NOVO PRODUTO EM UM VETOR,

produtos.push({ //método push para adicionar um novo objeto ao final do vetor produtos
    nome: "Notebook Mcbook Pro", //propriedade nome - valor "Samsung Galaxy S21"
    preco: 21799.99, //propriedade preco - valor 799.99
    quantidade: 8 //propriedade quantidade - valor 8
});
console.log( "Adicionado Notebook Mcbook: " + produtos.at(-1).nome);;
//imprime o vetor produto no console, mostrando todos os objetos e suas propriedades, incluindo o novo produto adicionado.

//FAÇA UMA FUNÇÃO PARA RETORNAR O NOME 
// De um dOS PRODUTOS A PARTIR DO SEU ÍNDICE NO VETOR.
//Usar comando export para exportar a função pegarNomeDoProduto, permitindo que ela seja importada e utilizada em outros arquivos, como o arquivo de teste gestaoProdutos.test.js.
export function pegarNomeDoProduto(indice) { //função chamada pegarNomeProduto pelo índice, que recebe um parâmetro indice, que é o índice do produto no vetor produtos.
    return produtos[indice].nome; //retorna o vetor produtos no índice especificado, acessando a propriedade nome do objeto correspondente.


}
//Faça uma nova função para adicionar um novo produto no vetor produtos, 
// recebendo como parâmetros o nome, preço e quantidade do produto a ser adicionado.
//Retornar o nome do produto adicionado para confirmar que a operação foi realizada com sucesso.
//Exemplo: adicionarProduto{
//  nome: "Macbook Pro",
//  preco: 5999.99,
//  quantidade: 5
//}
//Retornar "Produto Macbook Pro adicionado com sucesso!" para confirmar que a operação foi realizada com sucesso.
// }

export function adicionarProduto(produto) {

    if (produto.nome === "") { //verifica se a propriedade nome do objeto produto é uma string vazia, ou seja, se o nome do produto não foi informado.
        throw new Error("O nome do produto é obrigatório."); //lança um erro com a mensagem "O nome do produto é obrigatório.", 
        // indicando que o nome do produto é um campo obrigatório e não pode ser deixado em branco.
    }

    produtos.push({ //método push para adicionar um novo objeto ao final do vetor produtos
        nome: "Iphone 17 Pro", //propriedade nome - valor "Samsung Galaxy S21"
        preco: 11799.99, //propriedade preco - valor 799.99
        quantidade: 10 //propriedade quantidade - valor 8
    }); //método push para adicionar o novo produto ao final do vetor produtos, onde produtos é o objeto que representa o novo produto a ser adicionado, contendo as propriedades nome, preço e quantidade.});
    return produtos.at(-1).nome; //retorna o ultimo produto adicionado no veto -> at(-1) com a propriedade nome
    
}

console.log( "Adicionado Iphone17: " + produtos.at(-1).preco); //imprime o vetor produtos no console, mostrando todos os objetos e suas propriedades, incluindo o novo produto adicionado.

//passar por todos os elementos do vetor de produtos e imprimir o valor do vetor que tem o nome 'passatempo'
for ( let i = 0; i < produtos.length; i++){ //passar por todos os elementos do vetor de produtos
    if (produtos[i].nome == 'Iphone') { //filtrar o vetor de produtos para encontrar o produto com o nome 'passatempo'
        console.log("Preço do Iphone: " + produtos.at(i).preco); //imprimir o preço do produto encontrado
        }
    }


//passar por todos os elementos do vetor de produtos e imprimir o valor do vetor 
for ( let f = 0; f < produtos.length; f++){
    if (produtos.at(f).nome.startsWith("Notebook") ){
        console.log( "Preço do Notebook: " + produtos.at(f).preco);
        }
    }

    console.log(produtos);