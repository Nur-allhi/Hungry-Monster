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

// Taking input from the sarch bar:-
document.getElementById("sarch-btn").addEventListener("click", () => {
  const foodInput = document.getElementById("sarch-input").value;

  getFoods(foodInput);
});

// Display Food data on the website
const displayFoods = (foods) => {
  displayClear();
  const displayFoodMenu = document.getElementById("display-foods");
  foods.forEach((food) => {
    const everyColumn = document.createElement("div");
    everyColumn.className = "col-xl-3 col-lg-4 col-md-6";

    const foodsAre = `
    <div class="mt-4 card-div">
    <div class="card-img-hover img-div">
    <img class="food-images card-img-top" src="${food.strMealThumb}" alt="">
    <div>
    <div class="card-body">
   <h6 class="card-title text-center">${food.strMeal}</h6>
    </div>
    </div>
    `;
    everyColumn.innerHTML = foodsAre;
    displayFoodMenu.appendChild(everyColumn);
  });
};
