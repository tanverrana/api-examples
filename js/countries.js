const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    /* for (const country of countries) {
        console.log(country)
    } */
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country-style");
        div.innerHTML = `
        <h3>Country Common Name: ${country.name.common}</h3>
        <h3>Country Official Name: ${country.name.official}</h3>
        <h5>Capital: ${country.capital}</h5>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>`
        /* const h3 = document.createElement("h3");
        h3.innerText = `Common Name:${country.name.common} 
        Official Name: ${country.name.official}`;
        div.appendChild(h3);
        const h5 = document.createElement("h5");
        h5.innerText = `Capital: ${country.capital}`;
        div.appendChild(h5); */
        countriesDiv.appendChild(div);
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    const countryDiv = document.getElementById("country-detail");
    countryDiv.innerHTML = `
    <h5>Name: ${country.name.common}</h5>
    <p>Population: ${country.population}</p>
    <img src="${country.flags.png}">`

}