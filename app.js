// Taking input from the sarch bar:-
document.getElementById("sarch-btn").addEventListener("click", () => {
  const foodInput = document.getElementById("sarch-input").value;

  getFoods(foodInput);
});

// Fetch Food data from Api:-
const getFoods = (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      if (data.meals === null) {
        displayClear();
        document.getElementById("suggestion").style.display = "block";
        document.getElementById("tag-line").style.display = "none";
      } else {
        displayFoods(data.meals);
        document.getElementById("suggestion").style.display = "none";
        document.getElementById("tag-line").style.display = "block";
      }
    });
};

// Clear The previous sarch result:
const displayClear = () => {
  document.getElementById("display-foods").innerHTML = "";
};

// Display Food data on the website
const displayFoods = (foods) => {
  displayClear();
  const displayFoodMenu = document.getElementById("display-foods");
  foods.forEach((food) => {
    const everyColumn = document.createElement("div");
    everyColumn.className = "col-xl-3 col-lg-4 col-md-6";

    const foodsAre = `
    <div class="mt-4 card-div">
    <div onclick="getDetails(${food.idMeal}),showMeTheFoodDetails()" class="card-img-hover img-div">
    <img class="food-images card-img-top" src="${food.strMealThumb}" alt="">
    </div>
    <div class="card-body">
   <h6 class="card-title text-center">${food.strMeal}</h6>
    </div>
    </div>
    `;
    everyColumn.innerHTML = foodsAre;
    displayFoodMenu.appendChild(everyColumn);
  });
};
// Fetch data for showing Details of the specific Food:
const getDetails = (idOfFood) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idOfFood}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIngrideants(data.meals));
};

function showMeTheFoodDetails() {
  document.getElementById("display-foods").style.display = "none";
  document.getElementById("ingredient").style.display = "block";
}

// Show ingrediants:
const displayIngrideants = (foodDetails) => {
  const ingrediants = document.getElementById("ingredient");
  foodDetails.forEach((details) => {
    const foodIngrediants = `
         <div class="card ing-card">
            <div>
                <button id="menu-btn"> <img src="img/back.png" alt=""> Go back to the food menu</button>
                <div class=" row g-0">
                    <div class="col-md-7">
                        <img class="ingrediantsImg" src="${details.strMealThumb}" alt="...">
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h4 class="card-title">${details.strMeal}</h4>
                            <h5 class="card-title">Ingredients</h5>
                            <ul>
                                <li>${details.strIngredient1}</li>
                                <li>${details.strIngredient2}</li>
                                <li>${details.strIngredient3}</li>
                                <li>${details.strIngredient4}</li>
                                <li>${details.strIngredient5}</li>
                                <li>${details.strIngredient6}</li>
                                <li>${details.strIngredient7}</li>
                                <li>${details.strIngredient8}</li>
                                <li>${details.strIngredient9}</li>
                                <li>${details.strIngredient10}</li>
                                <li>${details.strIngredient11}</li>
                                <li>${details.strIngredient12}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  `;
    ingrediants.innerHTML = foodIngrediants;
  });
};

document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("ingredient").style.display = "none";
  document.getElementById("display-foods").style.display = "block";
});
