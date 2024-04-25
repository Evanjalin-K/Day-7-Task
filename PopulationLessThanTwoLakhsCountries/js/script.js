fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data=> {
const countryPopulationlessthan2L = data.filter(country => country.population < 200000);
console.log("Countries with a population of less two lakh")
countryPopulationlessthan2L.forEach(country =>{
console.log("Name:", country.name.common);
console.log("Population:", country.population);
});
})
.catch(error => console.error("Error fetching data:", error));