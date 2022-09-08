// import the sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// const nodemailer = require('nodemailer');

//create connection to our database, pass in our MySQL information username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

//Send email using nodemailer

// async function emailUser(name, toEmail) {
//   let transport = nodemailer.createTransport({
//     host: 'smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   var mailOptions = {
//     from: 'jyonly108@gmail.com',
//     to: toEmail,
//     subject: 'Successfully sign up to Group 4 - Movies Reviewer',
//     text: 'Welcome to Group 4 - Movies Reviewer, ' + name +
//       '. We hope you enjoy our movies reviewer'
//   };

//   transport.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

module.exports = sequelize;
