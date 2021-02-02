
exports.seed = function(knex) {
  return knex('posts').insert([
    { user_id: 1,  category_id: 1, name: "camera", description: 'foo=bar', image_url: 'https://uniquephoto3.azureedge.net/resources/uniquephoto/images/products/processed/RED2007.zoom.a.jpg'},
    { user_id: 1,  category_id: 3, name: "microphone", description: 'foo=bar', image_url: 'https://images.static-thomann.de/pics/bdb/129929/11557929_800.jpg'},
    { user_id: 1,  category_id: 2, name: "projector", description: 'foo=bar', image_url: 'https://cdn.mos.cms.futurecdn.net/TFBFbd8vNfcnwTVMngYQed.jpg'},
    { user_id: 2,  category_id: 2, name: "monitor", description: 'foo=bar', image_url: 'https://static.techspot.com/images2/news/bigimage/2014/12/2014-12-22-image-12.jpg'},
    { user_id: 2,  category_id: 3, name: "speakers", description: 'foo=bar', image_url: 'https://3.bp.blogspot.com/-E5VnhRUvks0/XOBfjzgKskI/AAAAAAAABzw/0SmXMc5LsCsuwxNWr7KS0WKzuzZzkWjWQCLcBGAs/s1600/IMG_3021.jpg'},
    { user_id: 3,  category_id: 4, name: "xbox", description: 'foo=bar', image_url: 'https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/12/XboxSeriesXHERO.jpg?fit=1920%2C1080'},
  ]);
};
