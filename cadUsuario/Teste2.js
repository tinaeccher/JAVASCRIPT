const array = [1, 2, 3, 4, 5];

array.forEach(function(element, index, array) { 

       console.log(`Elemento: ${element}, Índice: ${index}`);

});

//nessa função é declarada a variável e depois passado pela lista e depois retorna
function teste(){
    const lista = [1, 2, 4];

        let resultado = "não encontrado"; //valor inicial da variável resultado

        lista.forEach(function (item, index, element){
                if (item == 3){ //variável item é atribuída ao valor 3
                    resultado = item;//a variável resultado pode ser utilizada -> E muda o valor para item
                    return item; //return do forEach lista - return retorna para a função pai
                };
                    console.log(`Elemento: ${element}, Índice: ${index}, Item:${item}`);
        });
            return resultado;   //return para a function test - retorna para a função que está acima dele.
    };
    console.log(teste());

//FOR OF

function teste2(){//declara a função e retorna a variável
    const lista2 = [1, 3, 5];

    FOR (item of lista2){
        if (item == 3) {
            return item;
        }
    }
    console.log(`Elemento: ${element}, Índice: ${index}, Item:${item}`);
    
    return "Não encontrado"   //return para a function test - retorna para a função que está acima dele.
};
console.log(teste2());

//pesquisar funções utilizadas para array\vetor -> ForEach, filter, map, reduce