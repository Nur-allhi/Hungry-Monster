// Show some suggestion:
const hereIsYourSuggetion = (catagory) => {
  const url = `https://www.themealdb.com/api/json/v1/1/${catagory}.php`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
// Suggestion Food data with Array:-
const clickCatagory = "categories";
hereIsYourSuggetion(clickCatagory);
// // Display **Suggestion** Food data on the website
// const displaySuggestionFoods = (foods) => {
//   displayClear();
//   const displayFoodMenu = document.getElementById("display-foods");
//   foods.forEach((food) => {
//     const everyColumn = document.createElement("div");
//     everyColumn.className = "col-xl-3 col-lg-4 col-md-6";

//     const foodsAre = `
//     <div class="mt-4 card-div">
//     <div class="card-img-hover img-div">
//     <img class="food-images card-img-top" src="${food.strMealThumb}" alt="">
//     <div>
//     <div class="card-body">
//    <h6 class="card-title text-center">${food.strMeal}</h6>
//     </div>
//     </div>
//     `;
//     everyColumn.innerHTML = foodsAre;
//     displayFoodMenu.appendChild(everyColumn);
//   });
// };
// Fetch Food data from Api:-
const getFoods = (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      if (data.meals === null) {
        console.log("sarch another food");
      } else {
        displayFoods(data.meals);
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
