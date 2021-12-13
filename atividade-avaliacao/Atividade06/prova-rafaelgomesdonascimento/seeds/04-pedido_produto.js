
exports.seed = function(knex) {
  return knex('TB_PEDIDO_PRODUTO').del()
    .then(function () {
      return knex('TB_PEDIDO_PRODUTO').insert([
        {id: 1, pedido_id: 1, produto_id: 1, quantidade: 3, valor_item: 3*9.74},
        {id: 2, pedido_id: 1, produto_id: 2, quantidade: 4, valor_item: 4*5.90},
        {id: 3, pedido_id: 2, produto_id: 3, quantidade: 2, valor_item: 2*4.60},
        {id: 4, pedido_id: 2, produto_id: 4, quantidade: 5, valor_item: 5*7.50}
      ]);
    });
};