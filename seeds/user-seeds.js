const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "alesmonde0",
    email: "nwestnedge0@cbc.ca",
    pw: "password123",
  },
  {
    username: "jwilloughway1",
    email: "rmebes1@sogou.com",
    pw: "password123",
  },
  {
    username: "iboddam2",
    email: "cstoneman2@last.fm",
    pw: "password123",
  },
  {
    username: "dstanmer3",
    email: "ihellier3@goo.ne.jp",
    pw: "password123",
  },
  {
    username: "djiri4",
    email: "gmidgley4@weather.com",
    pw: "password123",
  },
  {
    username: "msprague5",
    email: "larnout5@imdb.com",
    pw: "password123",
  },
  {
    username: "mpergens6",
    email: "hnapleton6@feedburner.com",
    pw: "password123",
  },
  {
    username: "tpenniell7",
    email: "kperigo7@china.com.cn",
    pw: "password123",
  },
  {
    username: "msabbins8",
    email: "lmongain8@google.ru",
    pw: "password123",
  },
  {
    username: "jmacarthur9",
    email: "bsteen9@epa.gov",
    pw: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
