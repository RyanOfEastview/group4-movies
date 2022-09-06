const { Post } = require("../models");

const postdata = [
  {
    movie_title: "Forest Gump",
    movieDescription: "1994",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "The Wedding Singer",
    movieDescription: "1998",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Office Space",
    movieDescription: "1999",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Sin City",
    movieDescription: "2005",
    post_url: "",
    user_id: 4,
  },
  {
    movie_title: "Pulp Fiction",
    movieDescription: "1994",
    post_url: "",
    user_id: 7,
  },
  {
    movie_title: "The Usual Suspects",
    movieDescription: "1995",
    post_url: "",
    user_id: 4,
  },
  {
    movie_title: "Spider-Man: Into the Spider-Verse",
    movieDescription: "1997",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "Scarface",
    movieDescription: "1980",
    post_url: "",
    user_id: 1,
  },
  {
    movie_title: "The Wolf of Wall Street",
    movieDescription: "2013",
    post_url: "",
    user_id: 9,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
