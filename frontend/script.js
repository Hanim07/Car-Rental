document.getElementById('carSearchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const carModel = document.getElementById('input-1').value.toLowerCase();
    const monthlyPay = parseFloat(document.getElementById('input-2').value) || 0;
    const year = parseInt(document.getElementById('input-3').value) || 0;

    const searchResults = cars.filter(car => {
        const modelMatch = car.model.toLowerCase().includes(carModel);
        const monthlyPayMatch = car.monthlyPay <= monthlyPay || monthlyPay === 0;
        const yearMatch = car.year >= year || year === 0;

        return modelMatch && monthlyPayMatch && yearMatch;
    });

    displaySearchResults(searchResults);
});

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No matching cars found.</p>';
        return;
    }

    results.forEach(car => {
        const carInfo = `<p>Model: ${car.model}, Monthly Payment: ${car.monthlyPay}, Year: ${car.year}</p>`;
        resultsContainer.innerHTML += carInfo;
    });
}