const searchFood = () => {
    const searchField = document.getElementById("input-field");
    const searchText = searchField.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
    searchField.value = "";
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = "";
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div onclick = "loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions}</p>
                    </div>        </div>
        `;
        searchResult.appendChild(div);
    }
}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById("meal-details");
    mealDetails.textContent = "";
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions}</p>
                    </div>`;
    mealDetails.appendChild(div);
}