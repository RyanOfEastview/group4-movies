function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const pw = document.querySelector('#password-signup').value.trim();
  
    if (username && email && pw) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          pw
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }
  }
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);