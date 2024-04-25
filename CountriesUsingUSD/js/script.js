fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data=> {
const countriesUsingUSD = data.find(country=> country.currencies.USD);
if ( countriesUsingUSD){
console.log("Countries Using USD:", countriesUsingUSD.name.common);
}else{
    console.log("No country is using US Dollar")
}
})
.catch(error => console.error("Error fetching data:", error));