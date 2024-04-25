fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data=> {
    const asianCountries = data.filter(country=>country.region=="Asia");
console.log("Countries in Asia:", asianCountries);
asianCountries.forEach(country => {
console.log("Name:", country.name.common);
console.log("Capital:", country.capital);
console.log("Flag:", country.flags.png);
});   
const countryPopulationlessthan2L = data.filter(country => country.population < 200000);
console.log("Countries which has less than 2 lakhs")
countryPopulationlessthan2L.forEach(country =>{
console.log("Name:", country.name.common);
console.log("Population:", country.population);
});
const totalPopulation = data.reduce((acc, country)  => acc + country.population, 0)
console.log("Total population:", totalPopulation)
const countriesUsingUSD = data.find(country=> country.currencies.USD);
if ( countriesUsingUSD){
console.log("Countries Using USD:", countriesUsingUSD.name.common);
}else{
    console.log("No country is using US Dollar")
}
})
.catch(error => console.error("Error fetching data:", error));
