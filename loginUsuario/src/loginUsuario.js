//Exercício: lista de usuarios de sistema com nome usuario e senha
//Criar duas constantes além da lista:
//      Login Esperado
//      Senha esperada - existente mostre sucesso
//Se encontrar o usuário com o login esperado e a senha igual a senha esperada, mostrar na tela Logou

const usuarios = [
    {
        nome: 'Maria da Silva',
        login: 'mariasilva@gmail.com',
        senha: 'maria1234'
    },
    {
        nome: 'Marta da Silva',
        login: 'martasilva@gmail.com',
        senha: 'marta1234'
    },
    {
        nome: 'Isabel da Silva',
        login: 'isabelsilva@gmail.com',
        senha: 'isabel1234'
    },
]
    usuarios.forEach(function(usuarios){
        const loginUsuario = 'isabelsilva@gmail.com';
        const senhaUsuario = 'isabel1234'

        if(usuarios.login == loginUsuario && usuarios.senha == senhaUsuario) {
            console.log("Usuário e senha estão corretos");
        } 
    });
    { console.log("Login incorreto"); }