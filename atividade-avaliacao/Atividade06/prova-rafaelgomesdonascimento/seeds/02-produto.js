
exports.seed = function(knex) {
  return knex('TB_PRODUTO').del()
    .then(function () {
      return knex('TB_PRODUTO').insert([
        {id: 1, descricao: 'Desinfetante', preco: 9.74},
        {id: 2, descricao: 'Leite', preco: 5.90},
        {id: 3, descricao: 'Macarrão', preco: 4.60},
        {id: 4, descricao: 'Açúcar', preco: 7.50}
      ]);
    });
};