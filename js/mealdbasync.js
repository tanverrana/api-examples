document.getElementById("error-message").style.display = "none";
const searchFood = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    //console.log(searchText);
    //clear data
    searchField.value = "";
    document.getElementById("error-message").style.display = "none";
    if (searchText == "") {
        //please write something to display
    }
    //Load Data
    else {
        const url = `https://www.themealdb.com/api/json/1/1/search.php?s=${searchText}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            displaySearchResult(data.meals)
        }
        catch (error) {
            console.log(error)
        }
        /* fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals)) */
    }
}
const displayError = error => {
    document.getElementById("error-message").style.display = "block";
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    //clear search result
    searchResult.innerHTML = "";
    if (meals.length == 0) {
        //show no result found
    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>`;
        searchResult.appendChild(div);
    })
    console.log(meals)
}

const loadMealDetail = async mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    /* fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0])); */
}
const displayMealDetail = meal => {
    console.log(meal);
    const mealDetails = document.getElementById("meal-details");
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title"> ${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Youtube</a>
    </div>`;
    mealDetails.appendChild(div);
}