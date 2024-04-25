fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data=> {
    const asianCountries = data.filter(country=>country.region=="Asia");
console.log("Countries in Asia:", asianCountries);
})
.catch(error => console.error("Error fetching data:", error));
