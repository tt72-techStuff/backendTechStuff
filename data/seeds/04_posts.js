
exports.seed = function(knex) {
  return knex('posts').insert([
    { user_id: 1,  category_id: 1, name: "camera", description: 'foo=bar'},
    { user_id: 1,  category_id: 3, name: "microphone", description: 'foo=bar'},
    { user_id: 1,  category_id: 2, name: "projector", description: 'foo=bar'},
    { user_id: 2,  category_id: 2, name: "monitor", description: 'foo=bar'},
    { user_id: 2,  category_id: 3, name: "speakers", description: 'foo=bar'},
    { user_id: 3,  category_id: 4, name: "xbox", description: 'foo=bar'},
  ]);
};
