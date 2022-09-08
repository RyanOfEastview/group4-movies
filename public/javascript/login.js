// const emailUser = require("./config/connection");

async function signupFormHandler(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-signup');
  const emailEl = document.querySelector('#email-signup');
  const pwEl = document.querySelector('#password-signup');

  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const pw = pwEl.value.trim();

  if (username && email && pw) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        pw
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      console.log('success');
      // var mailOptions = {
      //   from: 'jyonly108@gmail.com',
      //   to: email,
      //   subject: 'Successfully sign up to Group 4 - Movies Reviewer',
      //   text: 'Welcome to Group 4 - Movies Reviewer, ' + username +
      //     '. We hope you enjoy our movies reviewer'
      // };
    
      // transport.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });
      // emailUser(username, email);
      usernameEl.value = "";
      emailEl.value = "";
      pwEl.value = "";
      alert("Successfully signed up");
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const pw = document.querySelector('#password-login').value.trim();

  if (email && pw) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        pw
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

// function emailUser(name, toEmail) {
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'jyonly108@gmail.com',
//       pass: 'onlyForGame108'
//     }
//   });

//   var mailOptions = {
//     from: 'jyonly108@gmail.com',
//     to: toEmail,
//     subject: 'Successfully sign up to Group 4 - Movies Reviewer',
//     text: 'Welcome to Group 4 - Movies Reviewer, ' + name +
//       '. We hope you enjoy our movies reviewer'
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
