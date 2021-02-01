
exports.seed = function(knex) {
  return knex('category').insert([
    { name: 'camera'},
    { name: 'video'},
    { name: 'audio'},
    { name: 'gaming'},
  ]);
};
