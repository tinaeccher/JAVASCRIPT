import PedidosDelivery from "../src/pedidosDelivery.js";
import assert from 'node:assert';

describe('Classe de pedidos de delivery', function (){
    it ('Validar que ao enviar um pedido maior que R$ 80,00 reais o tipo é categorizado como premium', function (){
        const pedidosDelivery = new PedidosDelivery();
        pedidosDelivery.registrarPedido('PED-123', 'Pizza Master', 80.01);
        const retorno = pedidosDelivery.consultarUltimoPedido();
        assert.equal(retorno.tipo, 'premium');
    })
     it ('Validar que ao enviar um pedido menor que R$ 80,00 reais o tipo é categorizado como comum', function (){
        const pedidosDelivery = new PedidosDelivery();
        pedidosDelivery.registrarPedido('PED-123', 'Pizza Master', 79.99);
        const retorno = pedidosDelivery.consultarUltimoPedido();
        assert.equal(retorno.tipo, 'comum');
    })
     it ('Validar método de consultar último pedido', function (){
        const pedidosDelivery = new PedidosDelivery();
        pedidosDelivery.registrarPedido('PED-123', 'Pizza Master', 80.01);
        pedidosDelivery.registrarPedido('PED-124', 'Pizza Micro', 50.01);
        const retorno = pedidosDelivery.consultarUltimoPedido();
        assert.equal(retorno.numero, 'PED-124');
        assert.equal(retorno.restaurante, 'Pizza Micro');
        assert.equal(retorno.valor, 50.01);
        assert.equal(retorno.tipo, 'comum');
    })
})