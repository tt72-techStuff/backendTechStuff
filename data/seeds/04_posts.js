
exports.seed = function(knex) {
  return knex('posts').insert([

    { user_id: 1,  category_id: 1, name: "Red Dragon", description: 'The DRAGON-X BRAIN features a Super35 sensor and can shoot and record at 6K uncropped up to 75 fps.', image_url: 'https://uniquephoto3.azureedge.net/resources/uniquephoto/images/products/processed/RED2007.zoom.a.jpg'},

    { user_id: 1,  category_id: 3, name: "Shure SM7B", description: 'While Shure’s SM7B is a first-call mic for many sources, it’s a total rockstar dialog microphone. You’ll find this dynamic beauty dangling from broadcast booms in voiceover, ADR, radio, and podcast studios around the world.', image_url: 'https://images.static-thomann.de/pics/bdb/129929/11557929_800.jpg'},

    { user_id: 1,  category_id: 2, name: "Epson Home Cinema 5050UB", description: '3-LCD 1080p home theater projector with 4K/HDR source compatibility (2019)', image_url: 'https://cdn.mos.cms.futurecdn.net/TFBFbd8vNfcnwTVMngYQed.jpg'},

    { user_id: 2,  category_id: 2, name: "LG 34UC97 Ultrawide Curved Monitor", description: '34" Class 21:9 UltraWide® WQHD IPS Thunderbolt™ Curved LED Monitor (34.0" Diagonal)', image_url: 'https://static.techspot.com/images2/news/bigimage/2014/12/2014-12-22-image-12.jpg'},

    { user_id: 2,  category_id: 3, name: "Rokit 5 Studio Monitors", description: 'A new scientifically designed speaker enclosure and front-firing port offer exceptional low-end extension and accuracy, punch and flexible room-positioning.', image_url: 'https://3.bp.blogspot.com/-E5VnhRUvks0/XOBfjzgKskI/AAAAAAAABzw/0SmXMc5LsCsuwxNWr7KS0WKzuzZzkWjWQCLcBGAs/s1600/IMG_3021.jpg'},

    { user_id: 3,  category_id: 4, name: "Xbox Series X", description: 'The 12 teraflops of processing power housed in the system on a chip (SOC) work with AMD’s Zen 2 and RDNA 2 architectures to result in worlds that demand a closer look.', image_url: 'https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/12/XboxSeriesXHERO.jpg?fit=1920%2C1080'},
  ]);
};

