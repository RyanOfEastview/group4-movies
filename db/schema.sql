DROP TABLE IF EXISTS user;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  pw CHAR(128) NOT NULL
  );

CREATE TABLE movies (id INTEGER AUTO_INCREMENT PRIMARY KEY,
  movie_title VARCHAR(30) NOT NULL,
  movie_year VARCHAR(30) NOT NULL,
  comments TEXT
);