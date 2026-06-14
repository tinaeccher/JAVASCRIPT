//Crie um vetor com 5 elementos com as propriedades id, titulo, tema e preço
const livros = [
    {
        id: 1,
        titulo: 'Lógica de Programação',
        tema: 'Computação',
        preco: 122.00
    },
    {
        id: 2,
        titulo: 'Java for Dummies',
        tema: 'Computação',
        preco: 92.00
    },
    {
        id: 3,
        titulo: 'The Art of Software Testing',
        tema: 'Test Software',
        preco: 32.00
    },
    {
        id: 4,
        titulo: 'Agile Testing',
        tema: 'Metodologias Ágeis',
        preco: 33.00
    },
    {
        id: 5,
        titulo: 'Explore it!',
        tema: 'Ficção',
        preco: 33.00
    }
]

livros.push({
        id: 99,
        titulo: 'Inglês fluente em 30 dias',
        tema: 'Lingua inglesa',
        preco: 90
    })

 console.log("O ultimo livro adicionado: " + livros.at(-1).titulo);


//Crie uma função que receba o ID de um livro e retorne o seu título
//Exemplo: buscarTituloDoLivroPorID(99) -> 'Título do Livro ID 99'
export function buscarTituloDoLivroPorID(id){ //função para o ID que simplica a busca
    for (let i = 0; i < livros.lenght; i++){ //for para passar em todos os objetos do vetores
        if (livros[i].id == id){ //se o livro que estou procurando tem o ID que filtrei
            return livros[i].titulo; //retorna o título do livro do id.

        }
    };
}
console.log("livro de id 99 é: " + livros.at(-1).titulo); //imprimir o livro
