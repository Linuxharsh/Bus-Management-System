function adminLogin(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  window.auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    alert('admin logged in successfully');
    logAction('ADMIN_LOGIN', new Date());
  })
  .catch(error => alert(error.message));
}