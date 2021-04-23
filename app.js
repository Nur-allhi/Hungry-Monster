// Fetch data from Api:-
const getFoods = (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data.meals));
    .then((data) => {
      if (data.meals === null) {
        console.log("sarch another food");
      } else {
        displayFoods(data.meals);
      }
    });
};
// Taking input from the sarch bar:-
document.getElementById("sarch-btn").addEventListener("click", () => {
  const foodInput = document.getElementById("sarch-input").value;
  getFoods(foodInput);
});
// Enter key se for event
// document.getElementById("sarch-btn").addEventListener("keyup", (event) => {
//   if (event.key === 13) {
//     event.preventDefault();
//     document.getElementById("sarch-btn").click();
//   }
//   const foodInput = document.getElementById("sarch-input").value;
//   getFoods(foodInput);
// });

// Display data on the website
const displayFoods = (foods) => {
  const displayFoodMenu = document.getElementById("display-foods");
  foods.forEach((food) => {
    const everyColumn = document.createElement("div");
    everyColumn.className = "col-md-3";

    const foodsAre = `
    <div class="mt-4 card-size">
    <div class="img-hover-zoom img-div">
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
