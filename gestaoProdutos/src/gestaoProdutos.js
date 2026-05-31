const produtos = ['trakinas', 'doritos', 'coca-cola', 'fanta', 'guarana-antarctica'];

//função que seja capaz de receber um índice e 
// retornar um elemento específico do índice
// do vetor de produtos 

export function retornarProduto(indiceDoProduto) {
    return produtos.at(indiceDoProduto);   

    }
// função que seja capaz de receber um produto e
// adicionar esse produto no vetor de produtos 
export function adicionarProduto(produto){
    if(produto == ''){
        throw new Error('Informe um produto válido');
    }
    produtos.push(produto);
    return produtos.at(-1);
}


