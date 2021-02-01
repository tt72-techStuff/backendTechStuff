
exports.seed = function(knex) {
  return knex('users').insert([
    { username: 'rees', password: 'password', email: 'rees@mail.com', role_id: 1},
    { username: 'chaz', password: 'password', email: 'chaz@mail.com', role_id: 2},
    { username: 'mike', password: 'password', email: 'mike@mail.com', role_id: 1}
  ]);
};
