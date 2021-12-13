
exports.seed = function(knex) {
  return knex('TB_CLIENTE').del()
    .then(function () {
      return knex('TB_CLIENTE').insert([
        {id: 1, nome: 'Rafael'},
        {id: 2, nome: 'Ana'},
        {id: 3, nome: 'Paulo'},
        {id: 4, nome: 'Clara'}
      ]);
    });
};