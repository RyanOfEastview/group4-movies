const { Post } = require("../models");

const postdata = [
  {
    movie_title: "Forest Gump",
    year: "1994",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "The Wedding Singer",
    year: "1998",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Office Space",
    year: "1999",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Sin City",
    year: "2005",
    post_url: "",
    user_id: 4,
  },
  {
    movie_title: "Pulp Fiction",
    year: "1994",
    post_url: "",
    user_id: 7,
  },
  {
    movie_title: "The Usual Suspects",
    year: "1995",
    post_url: "",
    user_id: 4,
  },
  {
    movie_title: "Spider-Man: Into the Spider-Verse",
    year: "1997",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Scarface",
    year: "1980",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "The Wolf of Wall Street",
    year: "2013",
    post_url: "",
    user_id: 9,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
