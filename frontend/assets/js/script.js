'use strict';

/**
 * navbar toggle
 */

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



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});


async function searchCars() {
  const carSearchForm = document.getElementById('carSearchForm');
  const carModel = carSearchForm.elements['car-model'].value;
  const year = carSearchForm.elements['year'].value;

  try {
      const response = await fetch(`YOUR_API_ENDPOINT?carModel=${carModel}&year=${year}`);
      const data = await response.json();

      const searchResultsDiv = document.getElementById('searchResults');
      searchResultsDiv.innerHTML = ''; // Clear previous results

      if (data.length > 0) {
          data.forEach(car => {
              const carCard = document.createElement('div');
              carCard.classList.add('search-result-card');

              // Customize the card content based on your data structure
              carCard.innerHTML = `
                  <h3>${car.model}</h3>
                  <p>Year: ${car.year}</p>
                  <!-- Add more details as needed -->
              `;

              searchResultsDiv.appendChild(carCard);
          });
      } else {
          searchResultsDiv.innerHTML = '<p>No results found.</p>';
      }
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}