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
      usernameEl.value = "";
      emailEl.value = "";
      pwEl.value = "";
      alert("A signup confirmation email has been sent to your email address!");

      //Back to homepage
      document.location.replace('/');
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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
