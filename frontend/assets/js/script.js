
// const { response } = require("express");
require ('cors');


const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}


const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});


document.getElementById('register').addEventListener('submit', 
async (event) => { event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;
  
  const userData = { name, email, password};

  try {
    const response = await fetch('http://localhost:3000/signup#', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),

    }).then(response => response.json())
      

    if (response.ok) {
      console.log('Registration successful')
    } else {
      console.error('Registration failed:', response.status);
    }
  } catch (error) {
    console.error('Error during registration', error);
  };
  });



const loginForm = document.querySelector('#login');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });


});

