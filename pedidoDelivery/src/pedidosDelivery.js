export default class PedidosDelivery {
    
    #pedidos
    constructor() {
        this.#pedidos = [];
    }
    registrarPedido(numero, restaurante, valor) {
        let tipo = 'comum';

        if (valor > 80.00) {
        tipo = 'premium'
        }
        this.#pedidos.push({
            numero: numero,
            restaurante: restaurante,
            valor: valor,
            tipo: tipo
        })
    }
    consultarUltimoPedido(){
        return this.#pedidos.at(-1)
    }
}

/*const pedidosDelivery = new PedidosDelivery();
pedidosDelivery.registrarPedido('PED-123', 'Pizza Master', 120.50);
pedidosDelivery.registrarPedido('PED-123', 'Pizza Master', 79.99);
console.log(pedidosDelivery.consultarUltimoPedido());*/