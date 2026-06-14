const livros = [
    {
        id: '001',
        titulo: 'Lógica de Programação',
        tema: 'Computação',
        preco: 122.00
    },
    {
        id: '002',
        titulo: 'Java for Dummies',
        tema: 'Computação',
        preco: 92.00
    },
    {
        id: '003',
        titulo: 'Receitas Fitness',
        tema: 'Gastronomia',
        preco: 32.00
    },
    {
        id: '004',
        titulo: 'Mochileiro das galaxias',
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

export function buscarLivroPorID(livro){
    for (let i = 0; i < livros.lenght; i++){
        if (livros[i].id == 99){
       
        }  
    }
}
console.log("livro de id 99 é:" + livros.at(-1).titulo); //imprimir o livro
