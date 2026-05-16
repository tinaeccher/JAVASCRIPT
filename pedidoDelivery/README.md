# exercicio-sistemas-de-pedidos-de-delivery
Exercício criado para ajudar na resolução do desafio 02 da disciplina de programação para automação de testes

Sistema de Pedidos de Delivery

Crie uma classe que possua dois métodos: um para registrar um pedido e outro para consultar o último pedido realizado.

Os pedidos devem ser armazenados como objetos Javascript dentro de uma lista. Cada pedido terá:

número
restaurante
valor

Quando um pedido for registrado:

se o valor for maior que 80.00, o pedido deverá possuir a propriedade tipo com valor 'premium'
caso contrário, tipo será 'comum'

O método de consulta deve retornar apenas o último pedido.

Exemplo
const delivery = new ServicoDelivery();

delivery.registrarPedido('PED-123', 'Pizza Master', 120.50);

console.log(delivery.consultarUltimoPedido());

Resultado esperado:

{
   numero: 'PED-123',
   restaurante: 'Pizza Master',
   valor: 120.50,
   tipo: 'premium'
}
