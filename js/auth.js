function registerUser() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  window.auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    alert('user registered successfully');
    window.location.href = 'login.html';
  })
  .catch((error) => alert(error.message));
}

function loginUser(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  window.auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    alert('user logged in successfully');
    window.location.href = 'user.html';
  })
  .catch((error) => alert(error.message));
}