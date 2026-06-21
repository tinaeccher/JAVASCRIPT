const usuarios = [
    {
        nome: 'Maria da Silva',
        login: 'maria.silva@gmail.com',XMLDocument
        senha: '1357'
    },
    {
        nome: 'Joao Pereira',
        login: 'joaopereira@gmail.com',
        senha: '1234'
    },
    {
        nome: 'Pedro de Oliveira',
        login: 'pedrooliveira@gmail.com',
        senha: '112358'
    }
]

//Preciso de uma função capaz de receber dua entradas: Login e Senha.
//Ela deverá navegar em uma lista pré-existente, com 3 usuários e 
// então retornar o texto logado com sucesso.
//caso exista um usuário com login e senha iguais aos informados. 
// Caso não exista um usuário com login e senha informados, 
// uma mensagem dizendo "Usuário não encontrado" deverá ser exibida.

/*
1. Entradas - (O que é informado)
- Login
- Senha

2. Regras (Regras quanto ao que foi infomado, não são regras de negócio)
- Senha e Login devem ser alfanuméricos
- 

3. Processamento
- Se percorrer a lista, encontrar um usuário com login e senha iguais aos informados, retornar Login com sucesso.
- Se nenhum usuário corresponder após percorrer toda a lista retornar usuário não encontrado.

4. Saídas (O que o computador deve fazer como resposta)
- "Logado com sucesso" ou "Usuário não encontrado".

*/
    export function realizarLogin (login,senha){
        for (usuario of usuarios){
            
        }
    }

