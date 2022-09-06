const { Post } = require("../models");

const postdata = [
  {
    movie_title: "Donec posuere metus vitae ipsum.",
    year: "1997",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
  },
  {
    movie_title: "Morbi non quam nec dui luctus rutrum.",
    year: "1997",
    post_url: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    movie_title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    year: "1997",
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    movie_title: "Nunc purus.",
    year: "1997",
    post_url: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
  },
  {
    movie_title: "Pellentesque eget nunc.",
    year: "1997",
    post_url: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
  },
  {
    movie_title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    year: "1997",
    post_url: "https://stanford.edu/consequat.png",
    user_id: 4,
  },
  {
    movie_title: "In hac habitasse platea dictumst.",
    year: "1997",
    post_url: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
  },
  {
    movie_title: "Morbi non quam nec dui luctus rutrum.",
    year: "1997",
    post_url: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    movie_title: "Duis ac nibh.",
    year: "1997",
    post_url: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    movie_title: "Curabitur at ipsum ac tellus semper interdum.",
    year: "1997",
    post_url: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    movie_title: "In hac habitasse platea dictumst.",
    year: "1997",
    post_url: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    movie_title:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    year: "1997",
    post_url:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    movie_title: "Donec dapibus.",
    year: "1997",
    post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    movie_title: "Nulla tellus.",
    year: "1997",
    post_url: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    movie_title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    year: "1446",
    post_url: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    movie_title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    year: "1446",
    post_url: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    movie_title: "In hac habitasse platea dictumst.",
    year: "1997",
    post_url: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    movie_title: "Etiam justo.",
    year: "1997",
    post_url: "https://shareasale.com/quis.json",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
