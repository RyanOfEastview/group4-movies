DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  movie_title VARCHAR(60) NOT NULL,
  movie_year INTEGER NOT NULL,
  comments TEXT
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  pw CHAR(128) NOT NULL
  -- CONSTRAINT fk_movies FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE SET NULL
);

