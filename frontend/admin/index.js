import { AuthModule } from "@nestjs/passport";
import { CarController } from './car.controller';



document.getElementById('form_crud').addEventListener('submit', async (event) => {
    event.preventDefault(); 
  
    const id = document.getElementById('id').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const engine = document.getElementById('engine').value;
    const doors = document.getElementById('doors').value;
    const transmission = document.getElementById('transmission').value;
  
    const car = {
      id,
      rentalCompany,
      model,
      year,
      engine,
      doors,
      transmission,
    };
  
    const createButton = document.getElementById('create');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');
  
    if (event.target === createButton) {
      await createCar(car);
    } else if (event.target === updateButton) {
      await updateCar(id, car);
    } else if (event.target === deleteButton) {
      await deleteCar(id);
    }
  });

  async function createCar(car) {
    const response = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  
    if (response.ok) {
      alert('Car created successfully!');
      clearForm();
      getCars();
    } else {
      const error = await response.json();
      alert(`Error creating car: ${error.message}`);
    }
  }
  
  async function updateCar(id, car) {
    const response = await fetch(`http://localhost:3000/cars/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
  
    if (response.ok) {
      alert('Car updated successfully!');
      clearForm();
      getCars();
    } else {
      const error = await response.json();
      alert(`Error updating car: ${error.message}`);
    }
  }
  
  async function deleteCar(id) {
    const response = await fetch(`http://localhost:3000/cars/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      alert('Car deleted successfully!');
      clearForm();
      getCars();
    } else {
      const error = await response.json();
      alert(`Error deleting car: ${error.message}`);
    }
  }
  
  async function getCars() {
    const response = await fetch('http://localhost:3000/cars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      const cars = await response.json();
      displayCars(cars);
    } else {
      const error = await response.json();
      alert(`Error getting cars: ${error.message}`);
    }
  }
  
  
  function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('engine').value = '';
    document.getElementById('doors').value = '';
    document.getElementById('transmission').value = '';
  }

  function createCar(event) {
    event.preventDefault();
  
    const id = document.getElementById('id').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const engine = document.getElementById('engine').value;
    const doors = document.getElementById('doors').value;
    const transmission = document.getElementById('transmission').value;
  
    const car = {
      id,
      model,
      year,
      engine,
      doors,
      transmission,
    };
  
    fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Car created successfully!');
      })
      .catch((error) => {
        alert('Error creating car:', error.message);
      });
  }
  
  function updateCar(event) {
    event.preventDefault();
  
    const id = document.getElementById('id').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const engine = document.getElementById('engine').value;
    const doors = document.getElementById('doors').value;
    const transmission = document.getElementById('transmission').value;
  
    const car = {
      id,
      model,
      year,
      engine,
      doors,
      transmission,
    };
  
    fetch(`http://localhost:3000/cars/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Car updated successfully!');
      })
      .catch((error) => {
        alert('Error updating car:', error.message);
      });
  }
  
  function deleteCar(event) {
    event.preventDefault();
  
    const id = document.getElementById('id').value;
  
    fetch(`http://localhost:3000/cars/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Car deleted successfully!');
      })
      .catch((error) => {
        alert('Error deleting car:', error.message);
      });
  }