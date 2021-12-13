
exports.seed = function(knex) {
  return knex('TB_PEDIDO').del()
    .then(function () {
      return knex('TB_PEDIDO').insert([
        {id: 1, data_pedido: '2021-08-07', cliente_id: 1},
        {id: 2, data_pedido: '2021-05-20', cliente_id: 2}
      ]);
    });
};