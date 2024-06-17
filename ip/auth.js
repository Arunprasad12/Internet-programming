// auth.js
function saveUserDetails(user) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

function validateUser(loginDetails) {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === loginDetails.email && user.password === loginDetails.password);
}

function signup(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = { name, email, password };
  saveUserDetails(user);
  alert('Signup successful! You can now login.');
  window.location.href = 'login.html';
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const loginDetails = { email, password };
  if (validateUser(loginDetails)) {
      alert('Login successful!');
      window.location.href = 'bus.html';
  } else {
      alert('Invalid login credentials!');
  }
}
