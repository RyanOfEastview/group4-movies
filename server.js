const path = require('path');
const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");

// Connects to the server
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up Handlebars.js as the template engine of choice
const exphbs = require("express-handlebars");
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(require('./controllers/'));


// turn on routes
app.use(routes);

// turn on connection to db and server
// the following 'false' does not have to be included.  If set to 'true', it would drop and recreate all databases on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});


