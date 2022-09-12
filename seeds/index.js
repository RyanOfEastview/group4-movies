const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const { sequelize } = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  await seedPosts();
  console.log("--------------");

  await seedComments();
  console.log("--------------");

  process.exit(0);
};

seedAll();
//IMDB Search
var imdbKey = "k_d4tgq11p";

//Change this variable to search query
var searchMovie = "inception";

// var getMovie = function () {
//     var apiUrl = `https://imdb-api.com/en/API/SearchMovie/`+ imdbKey + `/` + searchMovie + ``;
//     fetch(apiUrl).then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           var movieImage = JSON.stringify(data.results[0].image);
//           var movieTitle =  JSON.stringify(data.results[0].title);
//           var movieDescription = JSON.stringify(data.results[0].description);
//           console.log(movieTitle);
//           console.log(movieDescription);
//           console.log(movieImage);
//           console.log(data);
//          });
//       } else {
//         console.log('Error');
//       }
//     })
//       .catch(function (error) {
//         console.log('Unable to connect.');
//       });

//   };

// getMovie();
